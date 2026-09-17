package com.datingapp.dto;

import com.datingapp.model.QuestionAnswer;
import java.util.List;

public class QuestionnaireSubmitRequest {
    private List<QuestionAnswer> answers;

    public QuestionnaireSubmitRequest() {}

    public List<QuestionAnswer> getAnswers() { return answers; }
    public void setAnswers(List<QuestionAnswer> answers) { this.answers = answers; }
}
