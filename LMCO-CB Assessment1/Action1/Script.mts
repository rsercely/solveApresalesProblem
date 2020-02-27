'Dim QuestionCount = freebirdFormviewerViewNumberedItemContainer items
'For i = 1 To QuestionCount Step 1
'	Dim QuestionText = innertext.freebirdFormviewerViewItemsItemItemTitle exportItemTitle freebirdCustomFont (i)
'	Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebCheckBox("This is the answer for").Set "ON"
'Next @@ script infofile_;_ZIP::ssf1.xml_;_

'Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebCheckBox("This is the answer for_2").Set "ON" @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebCheckBox("This is the answer for_3").Set "ON" @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebCheckBox("This is the answer for_4").Set "ON" @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf5.xml_;_

' ron
set answerElem = description.Create()
answerElem("html tag").value = "DIV"
answerElem("role").value = "checkbox"

nquestions = datatable.GetRowCount
For thisAnswer = 1 To nquestions
	datatable.SetCurrentRow(thisAnswer)
	answerValue = datatable.value("Answer")
	print "Trying " & answerValue
	answerElem("acc_name").value = answerValue
	If Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebCheckBox(answerElem).Exist(1) then
		Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebCheckBox(answerElem).Highlight
		Browser("Assessment Exam-CB1").Page("Assessment Exam-CB1").WebCheckBox(answerElem).Set "on"
	end if 
Next



