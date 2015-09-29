Package.describe({
  name: 'nicolaslopezj:email-queue',
  version: '0.0.1',
  summary: 'Add emails to a queue and send them one by one',
  git: 'https://github.com/nicolaslopezj/email-queue'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use(['ecmascript', 'mongo', 'fongandrew:find-and-modify@0.2.1']);
  api.addFiles('email-queue.js', 'server');
  api.export('EmailQueue');
});

Package.onTest(function(api) {
});
