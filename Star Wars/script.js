<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="style.css">
    <title>Star Wars</title>
</head>

<body>
    <div>

        <div class="logoDiv" id="logoDiv">
            <!-- logo -->
            <img src="Images\logo.png" width="500px">
        </div>

        <div class="imageDiv" id="imageDiv">
            <!-- robot and rocket clickable image -->
            <img src="Images\robot.svg" width="200px" id="robot">
            <img src="Images\rocket.svg" width="200px" id="rocket">
        </div>
        <div>
            <img src="Images\loader3.gif" id="loader">
        </div>
        <div class="tableDiv" id="tableDiv">
            <table id="tableRobot" border="1px">
            </table>
            <table id="tableRocket" border="1px">
            </table>
        </div>

        <div class="buttonsDiv" id="buttonsDiv">
            <!-- buttons for navigating trough the pages -->
            <button id="prevRobot"> Previous </button>
            <button id="nextRobot"> Next </button>
            <button id="prevShip"> Previous </button>
            <button id="nextShip"> Next </button>
        </div>

        <div class="paginationR" id="paginationR">
           

        </div>
        <div class="paginationS" id="paginationS">
            

        </div>

    </div>

    <script src="script.js"></script>
</body>

</html>
