Package.describe({
  name: 'nicolaslopezj:email-queue',
  version: '0.0.1',
  summary: 'Add emails to a queue',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.addFiles('email-queue.js');
});

Package.onTest(function(api) {
});
