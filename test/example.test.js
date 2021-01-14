// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = "player gets a point";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(2,1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
