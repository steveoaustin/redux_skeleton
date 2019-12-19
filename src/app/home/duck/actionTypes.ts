const CHANGE_GREETING = "CHANGE_GREETING";

const ChangeGreeting = (greeting: string) => ({
  type: CHANGE_GREETING,
  payload: greeting
});

export default { ChangeGreeting, CHANGE_GREETING };
