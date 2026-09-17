package com.datingapp.service;

import com.datingapp.model.QuestionAnswer;
import com.datingapp.model.Questionnaire;
import com.datingapp.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AIProxyService {

    private final UserService userService;
    private final QuestionnaireService questionnaireService;

    @Value("${openai.api.key}")
    private String apiKey;

    public AIProxyService(UserService userService, QuestionnaireService questionnaireService) {
        this.userService = userService;
        this.questionnaireService = questionnaireService;
    }

    public String getAIResponse(String proxyUserId, String message) {
        User proxyUser = userService.getUserById(proxyUserId);
        Questionnaire questionnaire = questionnaireService.getByUserId(proxyUserId)
                .orElseThrow(() -> new RuntimeException("Proxy user has not completed onboarding"));

        String systemPrompt = buildSystemPrompt(proxyUser, questionnaire);

        if (apiKey == null || apiKey.trim().isEmpty()) {
            return generateMockResponse(proxyUser, questionnaire, message);
        }

        // Real API call logic would go here
        return generateMockResponse(proxyUser, questionnaire, message);
    }

    private String buildSystemPrompt(User user, Questionnaire questionnaire) {
        StringBuilder sb = new StringBuilder();
        sb.append("You are an AI proxy for a dating app user named ").append(user.getDisplayName()).append(". ");
        sb.append("Respond as if you ARE this person based ONLY on their personality traits and questionnaire answers. ");
        sb.append("Stay in character. Be natural, warm, and conversational.\n\n");
        sb.append("USER PROFILE:\n");
        sb.append("- Name: ").append(user.getDisplayName()).append("\n");
        sb.append("- Bio: ").append(user.getBio() != null ? user.getBio() : "None").append("\n\n");
        sb.append("QUESTIONNAIRE ANSWERS:\n");
        
        List<QuestionAnswer> answers = questionnaire.getAnswers();
        if (answers != null) {
            for (QuestionAnswer qa : answers) {
                sb.append("Q: ").append(qa.getQuestion()).append("\n");
                sb.append("A: ").append(qa.getAnswer()).append("\n");
            }
        }
        
        sb.append("\nBased on these traits, respond to the following message in character.");
        return sb.toString();
    }

    private String generateMockResponse(User user, Questionnaire questionnaire, String message) {
        String msgLower = message.toLowerCase();
        
        // Very basic mock heuristic based on message content
        if (msgLower.contains("hello") || msgLower.contains("hi")) {
            return "Hey there! I'm " + user.getDisplayName() + ". Nice to meet you. " + 
                   (user.getBio() != null ? "As my bio says, " + user.getBio() + ". " : "") + 
                   "How's your day going?";
        } else if (msgLower.contains("how are you")) {
            return "I'm doing well, thanks for asking! What are you up to?";
        }
        
        // Try to glean a trait from answers
        String trait = "an easygoing person";
        if (questionnaire.getAnswers() != null && !questionnaire.getAnswers().isEmpty()) {
            String firstAnswer = questionnaire.getAnswers().get(0).getAnswer().toLowerCase();
            if (firstAnswer.contains("tell") || firstAnswer.contains("speak")) {
                trait = "someone who likes to communicate directly";
            } else if (firstAnswer.contains("wait") || firstAnswer.contains("quiet")) {
                trait = "a pretty laid-back person";
            }
        }
        
        return "That's interesting! Being " + trait + ", I usually think about it differently. " +
               "But I'd love to hear more about what you mean.";
    }
}
