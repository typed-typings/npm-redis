import * as test from 'blue-tape';
import * as redis from 'redis';

test('test', (t) => {
  t.plan(2);
  t.assert(typeof redis.debug_mode === 'boolean', 'debug_mode');
  t.assert(typeof redis.createClient === 'function', 'createClient');
});
