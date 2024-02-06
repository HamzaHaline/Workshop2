<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Website with JS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
        }
        #output {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>
<body>

    <h1>Welcome to My Simple Website!</h1>

    <button onclick="changeText()">Click me!</button>

    <p id="output">This is a paragraph.</p>

    <script>
        function changeText() {
            var paragraph = document.getElementById("output");
            paragraph.innerHTML = "Button clicked! Text changed.";
        }
    </script>

</body>
</html>
