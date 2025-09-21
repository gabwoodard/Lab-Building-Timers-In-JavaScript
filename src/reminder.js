// Logs a message after a specified delay.
// Returns a Promise so tests can await confirmation.
function delayedReminder(message, delayMs = 1000, logger = console.log) {
  return new Promise((resolve) => {
    setTimeout(() => {
      logger(message);
      resolve(true);
    }, delayMs);
  });
}

module.exports = { delayedReminder };
