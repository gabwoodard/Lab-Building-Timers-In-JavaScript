// Logs the remaining seconds every tick and stops at 0.
// Returns the interval id so tests (or callers) can clear/inspect it.
function countdownTimer(seconds, intervalMs = 1000, logger = console.log) {
  if (typeof seconds !== 'number' || seconds < 0) {
    throw new Error('seconds must be a non-negative number');
  }

  let remaining = Math.floor(seconds);

  const id = setInterval(() => {
    logger(remaining);

    if (remaining === 0) {
      clearInterval(id);
      return;
    }
    remaining -= 1;
  }, intervalMs);

  return id;
}

module.exports = { countdownTimer };
