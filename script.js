// This is a demonstration code snippet for the LeRobot.js API.
// It assumes you have LeRobot.js properly set up and a robot connected.

// For demonstration in Codespaces without a real robot,
// we'll create a mock 'robot' object to simulate actions.
// In a real scenario, LeRobot.js would provide the 'robot' object.
const robot = {
    setSpeed: function(left, right) {
        console.log(`[Robot Mock] Setting motor speeds: Left=${left}, Right=${right}`);
        // In a real setup, this would send commands to your physical robot.
    },
    sleep: function(ms) {
        return new Promise(resolve => {
            console.log(`[Robot Mock] Waiting for ${ms}ms...`);
            setTimeout(resolve, ms);
        });
    }
};


async function demonstrateRobotMovement() {
    console.log("Starting LeRobot.js demonstration...");

    try {
        console.log("Robot moving forward for 1 second...");
        robot.setSpeed(0.5, 0.5); // Left motor, Right motor at half speed forward
        await robot.sleep(1000); // Wait for 1000 milliseconds (1 second)

        console.log("Robot turning right for 1 second...");
        robot.setSpeed(0.5, -0.5); // Left motor forward, Right motor backward
        await robot.sleep(1000); // Wait for 1 second

        console.log("Robot stopping...");
        robot.setSpeed(0, 0);
        await robot.sleep(500); // Give it a moment to fully stop

        console.log("Demonstration complete!");

    } catch (error) {
        console.error("An error occurred during robot demonstration:", error);
    }
}