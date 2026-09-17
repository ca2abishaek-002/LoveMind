package com.datingapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "chat_logs")
public class ChatLog {
    @Id
    private String id;
    private String senderId;
    private String proxyUserId;
    private List<ChatMessage> messages;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public ChatLog() {}

    public ChatLog(String id, String senderId, String proxyUserId, List<ChatMessage> messages, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.senderId = senderId;
        this.proxyUserId = proxyUserId;
        this.messages = messages;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getSenderId() { return senderId; }
    public void setSenderId(String senderId) { this.senderId = senderId; }

    public String getProxyUserId() { return proxyUserId; }
    public void setProxyUserId(String proxyUserId) { this.proxyUserId = proxyUserId; }

    public List<ChatMessage> getMessages() { return messages; }
    public void setMessages(List<ChatMessage> messages) { this.messages = messages; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
