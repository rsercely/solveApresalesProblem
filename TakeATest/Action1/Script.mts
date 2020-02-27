set answerElem = description.Create()
answerElem("html tag").value = "SPAN"
nrows = Browser("Browser").Page("Page").WebTable("This is the question for").RowCount()
nquestions = nrows/5

For question  = 0 To nquestions -1
	questionValue = Browser("Browser").Page("Page").WebTable("This is the question for").GetCellData(1+question*5,1)
	datatable.Value("CurrQuestion") = questionValue
	
	
	questionValue = Browser("Browser").Page("Page").WebTable("This is the question for").GetCellData(1+question*5,1)
	questionAnswer = datatable.Value("CurrAnswer")
	answerElem("innertext").value = questionAnswer
	Browser("Browser").Page("Page").WebElement(answerElem).highlight
	wait 1
	Browser("Browser").Page("Page").WebElement(answerElem).highlight
	wait 1
	Browser("Browser").Page("Page").WebElement(answerElem).highlight
	foo = 1


Next

foo = 1
