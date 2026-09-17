package com.datingapp.repository;

import com.datingapp.model.ChatLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatLogRepository extends MongoRepository<ChatLog, String> {
    Optional<ChatLog> findBySenderIdAndProxyUserId(String senderId, String proxyUserId);
    List<ChatLog> findBySenderId(String senderId);
}
