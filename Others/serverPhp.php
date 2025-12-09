<?php

// Set JSON header for all responses
header("Content-Type: application/json");

// Get the request method and path
$method = $_SERVER["REQUEST_METHOD"];
$path   = $_SERVER["REQUEST_URI"];

// GET /api/hello
if ($method === "GET" && $path === "/api/hello") {
    echo json_encode(["message" => "Hello world"]);
    exit;
}

// POST /api/user
if ($method === "POST" && $path === "/api/user") {
    // Read JSON body
    $body = json_decode(file_get_contents("php://input"), true);

    echo json_encode(["received" => $body]);
    exit;
}

// Fallback (route not found)
http_response_code(404);
echo json_encode(["error" => "Route not found"]);
