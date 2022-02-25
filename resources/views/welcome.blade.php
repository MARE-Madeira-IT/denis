<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>MARE</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">

    <style>
        body {
            margin: 0;
            min-height: 100%;
            font-family: 'Poppins', sans-serif;
            
        }
    </style>
</head>

<body>
    <div id="index">

        <div class="full-page-loader">
            <div class="loading"></div>
        </div>

        <script src="{{mix('js/app.js')}}"></script>

    </div>
</body>

</html>