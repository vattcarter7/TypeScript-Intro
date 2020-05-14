import { User } from './models/User';

const user = new User({ name: 'new record', age: 999 });

user.events.on('change', () => {
  console.log('hahaha');
});

user.events.trigger('change');
