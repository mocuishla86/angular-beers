# angular-beers


# links
 
 * https://cli.angular.io/
 * 

 # notas

 _ng_ es el comando de angular cli. Te permite hacer varias cosas, como lanzarlo (ng serve)

## Componente

 Formado por:
 - Una clase typescript(propiedades, métodos, etc.)
 - Una plantilla (dond está el HTML)
 - Su hoja de estilos (CSS, CSSS)

 Para saber qué plantilla y css usa una clase, se usa la anotación compoment. 

  Además, selector sirve para saber cómo _enchufar_ ese componente dentro del html de la aplicación. 

  Para crear un componente, hay dos formas. 
  
  ### Forma manual
  
   - Crear su .ts, su html, su css
   - Hay que hacer referencia a la template(html) y al css desde la anotación @Component del .ts.
   - Elegir un nombre para el selector del componente y ponerlo también en @Component.
   - Añadirlo al módulo en declarations.
   - Ya lo puedo meter en la template de cualquier componente usando su selector.

  ### Forma automática molona
 
  - Llamar a ng generate component (o ng g c) y seguir instrucciones. 
