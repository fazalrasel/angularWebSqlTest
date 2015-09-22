<?php

$subjects = array();

for ($j = 1; $j <= 2; $j++) {
    array_push($subjects, array(
        'id' => $j,
        'subjectName' => 'Subject ' . $j
    ));
}

$chapters = array();
$counter = 1;
foreach ($subjects as $subject) {
    for ($j = 1;
         $j <= 2; $j++) {
        array_push($chapters, array(
            'id' => $counter,
            'chapterName' => 'Chapter ' . $counter,
            'subjectId' => $subject['id']
        ));
        $counter++;
    }
}


$questions = array();


$qCounter = 1;
foreach ($subjects as $subject) {
    foreach ($chapters as $chapter) {
        for ($i = 1; $i <= 2; $i++) {
            $ques = array(
                'id' => $qCounter,
                'chapterId' => $chapter['id'],
                'subjectId' => $subject['id'],
                'questionType' => 's',
                'question' => 'Question ' . $qCounter . ' Subject ' . $subject['id'] . ' Chapter ' . $chapter['id'],
                'optionNonAnswers' => array(
                    array(
                        'id' => $qCounter,
                        'opt' => 'non answer ' . ($qCounter
                            )),
                    array(
                        'id' => ($qCounter + 1),
                        'opt' => 'non answer ' . ($qCounter + 1)
                    ),
                    array(
                        'id' => ($qCounter + 2),
                        'opt' => 'non answer ' . ($qCounter + 2)
                    ),
                    array(
                        'id' => ($qCounter + 3),
                        'opt' => 'non answer ' . ($qCounter + 3)
                    ),
                    array(
                        'id' => ($qCounter + 4),
                        'opt' => 'non answer ' . ($qCounter + 4)
                    )
                ),
                'optionAnswers' => array(
                    array(
                        'id' => ($qCounter + 5),
                        'opt' => 'answer ' . ($qCounter + 5)
                    ),
                    array(
                        'id' => ($qCounter + 6),
                        'opt' => 'answer ' . ($qCounter + 6)
                    )
                )
            );
            $questions[] = $ques;
            $qCounter++;
        }
    }

}

$data = array();

$data['users'] = array(
    array(
        'id' => 1,
        'userName' => 'User 1',
        'password' => '12345'
    ),
    array(
        'id' => 2,
        'userName' => 'User 2',
        'password' => '12345'
    )
);
$data['subjects'] = $subjects;
$data['chapters'] = $chapters;
$data['questions'] = $questions;

file_put_contents('data/test_data.json', json_encode($data));

