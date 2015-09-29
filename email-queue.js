EmailQueue = {};
EmailQueue.collection = new Mongo.Collection('email_queue');
EmailQueue.collection._ensureIndex({ date: 1 });

EmailQueue.noEmailsWaitTime = 1000;
EmailQueue.betweenEmailsWaitTime = 10;

EmailQueue.send = function(options) {
  options.date = new Date();
  return this.collection.insert(options);
};

var sendNextEmail = function() {
  var next = EmailQueue.collection.findAndModify({
    query: {},
    sort: { date: 1 },
    remove: true
  });

  if (!next) {
    Meteor._sleepForMs(EmailQueue.noEmailsWaitTime);
    sendNextEmail();
    return;
  }

  Email.send(next);

  Meteor._sleepForMs(EmailQueue.betweenEmailsWaitTime);
  sendNextEmail();
}

Meteor.startup(function() {
  Meteor.defer(function() {
    sendNextEmail();
  });
});
