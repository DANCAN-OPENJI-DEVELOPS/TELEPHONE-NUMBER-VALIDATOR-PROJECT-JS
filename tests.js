// telephone validator's tests
telephoneCheck("555-555-5555") should return a boolean.
Passed:telephoneCheck("1 555-555-5555") should return true.
Passed:telephoneCheck("1 (555) 555-5555") should return true.
Passed:telephoneCheck("5555555555") should return true.
Passed:telephoneCheck("555-555-5555") should return true.
Passed:telephoneCheck("(555)555-5555") should return true.
Passed:telephoneCheck("1(555)555-5555") should return true.
Passed:telephoneCheck("555-5555") should return false.
Passed:telephoneCheck("5555555") should return false.
Passed:telephoneCheck("1 555)555-5555") should return false.
Passed:telephoneCheck("1 555 555 5555") should return true.
Passed:telephoneCheck("1 456 789 4444") should return true.
Passed:telephoneCheck("123**&!!asdf#") should return false.
Passed:telephoneCheck("55555555") should return false.
Passed:telephoneCheck("(6054756961)") should return false.
Passed:telephoneCheck("2 (757) 622-7382") should return false.
Passed:telephoneCheck("0 (757) 622-7382") should return false.
Passed:telephoneCheck("-1 (757) 622-7382") should return false.
Passed:telephoneCheck("2 757 622-7382") should return false.
Passed:telephoneCheck("10 (757) 622-7382") should return false.
Passed:telephoneCheck("27576227382") should return false.
Passed:telephoneCheck("(275)76227382") should return false.
Passed:telephoneCheck("2(757)6227382") should return false.
Passed:telephoneCheck("2(757)622-7382") should return false.
Passed:telephoneCheck("555)-555-5555") should return false.
Passed:telephoneCheck("(555-555-5555") should return false.
Passed:telephoneCheck("(555)5(55?)-5555") should return false.
Passed:telephoneCheck("55 55-55-555-5") should return false.
Passed:telephoneCheck("11 555-555-5555") should return false.