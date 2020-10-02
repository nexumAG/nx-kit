module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'creates a @nx-kit component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/libs/@nx-kit/{{name}}',
        base: 'plop-templates/nx-component',
        templateFiles: 'plop-templates/nx-component/**',
        globOptions: {
          dot: true,
        },
      },
    ],
  });
};
