export const run = (state, runners) => {
  return runners.reduce((memo, runner) => {
    return Object.assign(memo, runner(state));
  }, {});
};

export const ruleRunner = (field, ...validations) => {
  return (state) => {
    for (const v  of validations) {
      const errorMessage = v(state[field]);
      if (errorMessage) {
        return {[field]: errorMessage};
      }
    }
    return null;
  };
};