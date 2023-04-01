import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((response) => {
    createUser().then((data) => {
      console.log(`${response.body} ${data.firstName} ${data.lastName}`);
    }).catch(() => {
      console.error('Signup system offline');
    });
  }).catch(() => {
    console.error('Signup system offline');
  });
}
