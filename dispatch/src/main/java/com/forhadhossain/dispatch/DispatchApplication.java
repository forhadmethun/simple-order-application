package com.forhadhossain.dispatch;

import com.forhadhossain.dispatch.config.converter.LocalDateAdapter;
import com.forhadhossain.dispatch.config.converter.LocalDateTimeAdapter;
import com.forhadhossain.dispatch.config.converter.LocalTimeAdapter;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@SpringBootApplication
public class DispatchApplication {
    public static void main(String[] args) {
        SpringApplication.run(DispatchApplication.class, args);
    }
    @Bean
    public Gson gson() {
        return new GsonBuilder()
                .serializeNulls()
                .setPrettyPrinting()
                .registerTypeAdapter(LocalDateTime.class, new LocalDateTimeAdapter().nullSafe())
                .registerTypeAdapter(LocalDate.class, new LocalDateAdapter().nullSafe())
                .registerTypeAdapter(LocalTime.class, new LocalTimeAdapter().nullSafe())
                .create();
    }
}
