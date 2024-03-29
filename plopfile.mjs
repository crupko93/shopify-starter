export default function (plop) {
	// create your generators here
  plop.setGenerator('Vue Component', {
    description: 'Create a Vue Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component Name?'
      },
      {
        type: 'confirm',
        name: 'renderless',
        message: 'Create renderless component?',
        default: false
      },
    ],
    actions: (data) => {
      let actions = []
      if (data.renderless) {
        actions.push({
          type: 'add',
          path: `src/vue/components/{{ pascalCase name }}/index.vue`,
          templateFile: 'plop/renderless-component.hbs'
        })
      } else {
        actions.push({
          type: 'add',
          path: 'src/vue/components/{{ pascalCase name }}/index.vue',
          templateFile: 'plop/render-component.hbs'
        })
      }
      return actions
    }
});
  
	plop.setGenerator('JavaScript - Utility', {
		description: 'Generate a new utility file',
		prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'File name please'
      },
    ], // array of inquirer prompts
		actions: [
      {
        type: 'add',
        path: 'src/utils/{{ name }}.js',
        templateFile: 'plop/util.hbs'
      }
    ]  // array of actions
	});
  
	plop.setGenerator('Shopify - Section', {
		description: 'Generate a new Shopify section',
		prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'File name please'
      },
    ], // array of inquirer prompts
		actions: [
      {
        type: 'add',
        path: 'shopify/sections/{{ kebabCase name }}.liquid',
        templateFile: 'plop/section.hbs'
      },
      {
        type: 'add',
        path: 'src/css/sections/{{ kebabCase name }}.scss',
        templateFile: 'plop/css.hbs'
      }
    ]  // array of actions
	});
  
	plop.setGenerator('Shopify - Snippet', {
		description: 'Generate a new Shopify snippet',
		prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'File name please'
      },
    ], // array of inquirer prompts
		actions: [
      {
        type: 'add',
        path: 'shopify/snippets/{{ kebabCase name }}.liquid',
        templateFile: 'plop/snippet.hbs'
      }
    ]  // array of actions
	});
  
	plop.setGenerator('CSS - Component', {
		description: 'Generate a new CSS component',
		prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'File name please'
      },
    ], // array of inquirer prompts
		actions: [
      {
        type: 'add',
        path: 'src/css/components/{{ kebabCase name }}.css',
        templateFile: 'plop/css.hbs'
      },
      {
        type: 'append',
        path: 'src/css/main.scss',
        pattern: '/* Components */',// keep this line - the template will append bellow your comment
        template: "@import \"components/{{ kebabCase name }}\";", // replace your append template here
      }
    ]  // array of actions
	});
  
  plop.setGenerator('CSS - Utility', {
		description: 'Generate a new CSS utility',
		prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'File name please'
      },
    ], // array of inquirer prompts
		actions: [
      {
        type: 'add',
        path: 'src/css/utils/{{ kebabCase name }}.css',
        templateFile: 'plop/css.hbs'
      },
      {
        type: 'append',
        path: 'src/css/main.scss',
        pattern: '/* Utiliies */',// keep this line - the template will append bellow your comment
        template: "@import \"utils/{{ kebabCase name }}\";", // replace your append template here
      }
    ]  // array of actions
	});
};