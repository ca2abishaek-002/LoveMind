package com.datingapp.repository;

import com.datingapp.model.Questionnaire;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionnaireRepository extends MongoRepository<Questionnaire, String> {
    Optional<Questionnaire> findByUserId(String userId);
}
