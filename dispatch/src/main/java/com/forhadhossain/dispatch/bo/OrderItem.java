package com.forhadhossain.dispatch.bo;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class OrderItem {
    public String name;
    public Long quantity;
    public Double unitPrice;
    public List<String> addOns;

    public static List<OrderItem> fromString(String jsonString){
        Gson gson = new Gson();
        Type type = new TypeToken<ArrayList<OrderItem>>(){}.getType();
        List<OrderItem> orderItems = gson.fromJson(jsonString, type);
        return orderItems;
    }

    public static String toString(List<OrderItem> orderItems){
        Gson gson = new Gson();
        return gson.toJson(orderItems);
    }
}
