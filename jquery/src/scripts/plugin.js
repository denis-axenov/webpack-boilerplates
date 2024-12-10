import $ from 'jquery';


$.fn.plugin = (config) => {

    if (typeof config !== 'object' || config === null || Array.isArray(config)) {
        throw new Error('Parameter must be an object');
    }

    if (!('param1' in config) || !('param2' in config)) {
        throw new Error('Required parameters param1 and param2 must be provided');
    }

    if (typeof config.param1 !== 'number' || typeof config.param2 !== 'number') {
        throw new Error('Parameters param1 and param2 must be numbers');
    }

    console.log('Plugin initialized', config);
    return this;
};