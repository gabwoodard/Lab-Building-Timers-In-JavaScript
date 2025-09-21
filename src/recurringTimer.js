// Repeatedly logs `message` every `intervalMs` until stopped.
// Returns the interval id so it can be cleared.
function recurringTimer(message, intervalMs = 1000, logger = console.log) {
  const id = setInterval(() => {
    logger(message);
  }, intervalMs);
  return id;
}

// Clears a running interval created by recurringTimer.
function stopRecurringTimer(id) {
  clearInterval(id);
}

module.exports = { recurringTimer, stopRecurringTimer };
