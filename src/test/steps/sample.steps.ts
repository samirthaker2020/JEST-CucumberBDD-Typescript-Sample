import axios from 'axios';
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('src/test/feature/sample.feature');
// logging-in.steps.js
let cat;

defineFeature(feature, (test) => {
	test('As a user I want view list of data', ({ given, when, then }) => {
		given('the user has logged into app', () => {});

		when('the user request to view cat deatils', async () => {
			cat = await axios.get('https://jsonplaceholder.typicode.com/posts');
		});

		then('the system should return a sucess response', () => {
			// console.log(cat.data[0]);
			expect(cat.status).toBe(200);
			expect(cat.data[0].userId).toBe(1);
		});
	});

	// add next test() here
	// test('As a user I want view list of employees', ({
	//   given,
	//   when,
	//   then
	// }) => {
	//   given('the user has logged into app', () => {

	//   });

	//   when('the user request to view list of employees', () => {

	//   });

	//   then('the system should return a list of employees', () => {

	//   });
	// });
});
