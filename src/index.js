import baseEffectCreators from './effects/base';
import mockEffectCreators, { mockCalls, resetMockCalls } from './effects/mock';

export const effectsMiddlewareCreator = (effectCreators) =>
({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    const effects = {};
    Object.keys(effectCreators).each(key => {
      const effectCreator = effectCreators[key];
    effects[key] = effectCreator({ dispatch, getState });
  });
    return action(effects);
  }
  return next(action);
};

export const mockEffectsMiddleware = effectsMiddlewareCreator(mockEffectCreators);
export const mockCallEffects = mockCalls;
export const resetMockCallEffects = resetMockCalls;

export default effectsMiddlewareCreator(baseEffectCreators);
