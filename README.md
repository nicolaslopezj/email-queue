# Email Queue

Creates a queue for sending emails.

Works with multiple servers.

```sh
meteor add nicolaslopezj:email-queue
```

### Usage

Replace ```Email.send(options)``` with ```EmailQueue.send(options)```.

```js
EmailQueue.send({
  to: 'me@email.com',
  from: 'app@email.com',
  subject: 'Test email',
  html: 'Hello'
});
```

### Options

```js
EmailQueue.noEmailsWaitTime = 1000; // Loop sleep time when there are no emails (default: 1000)
EmailQueue.betweenEmailsWaitTime = 10; // Loop sleep time when there are emails (default: 10)
```
