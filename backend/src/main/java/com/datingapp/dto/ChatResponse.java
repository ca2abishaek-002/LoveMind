package com.datingapp.dto;

import java.time.LocalDateTime;

public class ChatResponse {
    private String reply;
    private String proxyUserName;
    private LocalDateTime timestamp;

    public ChatResponse() {}

    public ChatResponse(String reply, String proxyUserName, LocalDateTime timestamp) {
        this.reply = reply;
        this.proxyUserName = proxyUserName;
        this.timestamp = timestamp;
    }

    public String getReply() { return reply; }
    public void setReply(String reply) { this.reply = reply; }

    public String getProxyUserName() { return proxyUserName; }
    public void setProxyUserName(String proxyUserName) { this.proxyUserName = proxyUserName; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}
