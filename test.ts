import * as test from 'blue-tape';
import * as redis from 'redis';

test('test', (t) => {
  const client = redis.createClient();
  const randomkey = Math.random().toString(36);

  client.set(randomkey, 'test', function (err, res) {
    t.equal(err, null);
    t.equal(res, 'OK');

    client.get(randomkey, function (err1, res1) {
      t.equal(err1, null);
      t.equal(res1, 'test');

      client.del(randomkey, function (err2, res2) {
        t.equal(err2, null);
        t.equal(res2, 1);

        client.unref();

        t.end();
      });
    });
  });
});
