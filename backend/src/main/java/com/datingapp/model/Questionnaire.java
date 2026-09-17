package com.datingapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "questionnaires")
public class Questionnaire {
    @Id
    private String id;
    private String userId;
    private List<QuestionAnswer> answers;
    private String personalitySummary;
    private LocalDateTime completedAt;

    public Questionnaire() {}

    public Questionnaire(String id, String userId, List<QuestionAnswer> answers, String personalitySummary, LocalDateTime completedAt) {
        this.id = id;
        this.userId = userId;
        this.answers = answers;
        this.personalitySummary = personalitySummary;
        this.completedAt = completedAt;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public List<QuestionAnswer> getAnswers() { return answers; }
    public void setAnswers(List<QuestionAnswer> answers) { this.answers = answers; }

    public String getPersonalitySummary() { return personalitySummary; }
    public void setPersonalitySummary(String personalitySummary) { this.personalitySummary = personalitySummary; }

    public LocalDateTime getCompletedAt() { return completedAt; }
    public void setCompletedAt(LocalDateTime completedAt) { this.completedAt = completedAt; }
}
