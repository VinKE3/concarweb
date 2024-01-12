export const dataSubLibros = [
  {
    id: "1.1",
    title: "Libro Electrónico Registro de Compras",
    description:
      "Se detalla el proceso para la generación, validación y carga óptima del libro electrónico de compras en el Programa de Libros Electrónicos (PLE-SUNAT).",
    href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras",
    subtitle2: [
      {
        id: "1.1.1",
        title: "Generación del Libro Electrónico de Compras",
        description:
          "Este tutorial contiene todo lo relacionado a la creación del libro electrónico de compras en el sistema CONCAR®.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras",
        subtitle3: [
          {
            id: "1.1.1.1",
            title: "Cómo Generar el Libro Electrónico de Compras",
            description:
              "El presente documento detalla el procedimiento a realizar en el CONCAR para generar el libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/como-generar-libro-compras",
          },
          {
            id: "1.1.1.2",
            title:
              "Estado o Indicador de la Operación en el Libro Electrónico de Compras",
            description:
              "Procedimiento para registrar operaciones de compras según el estado a informar.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/estado-indicador-libro-compras",
          },
          {
            id: "1.1.1.3",
            title:
              "Rectificación - Registros Adicionales en Registro de Compras Electrónico",
            description:
              "En esta opción solo se registrarán las rectificaciones de los comprobantes de compras que se informarán en la declaración del libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/generacion-libro-electronico-compras/rectificacion-registro-compras",
          },
        ],
      },
      {
        id: "1.1.2",
        title: "Validación de Registro de Compras - PLE",
        description:
          "Reporte que emite el CONCAR® automáticamente, al generar el libro electrónico de compras, cuando detecta observaciones en los comprobantes registrados que impidan la carga del libro electrónico al PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple",
        subtitle3: [
          {
            id: "1.1.2.1",
            title:
              "Validación de Libro Electrónico de Compras - Número de documento no debe estar en blanco o en cero",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar el número de documento en el registro, el campo no debe estar en blanco ni ser cero.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-blanco-cero",
          },
          {
            id: "1.1.2.2",
            title:
              "Validación de Libro Electrónico de Compras - Número de serie es obligatoria",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar el número de serie del documento registrado.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/numero-serie-obligatoria",
          },
          {
            id: "1.1.2.3",
            title:
              "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 01 Factura",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 01 Factura",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-tipo01-factura",
          },
          {
            id: "1.1.2.4",
            title:
              "Validación de Libro Electrónico de Compras - Para código de documento SUNAT 01 Factura, documento de proveedor debe ser código 6 RUC",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no seleccionar un tipo de documento correcto para un proveedor del exterior.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/documento-codigo6-ruc",
          },
          {
            id: "1.1.2.5",
            title:
              "Validación de Libro Electrónico de Compras - Error en número de serie para tipo de documento 02 Recibo por Honorarios",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie del tipo de documento recibo por honorarios.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento02-recibo-honorarios",
          },
          {
            id: "1.1.2.6",
            title:
              "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 10 Recibo por Arrendamiento",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación porque el número de serie del documento tipo 10 Recibo por arrendamiento está incompleto y falta registrar el código por el aporte de renta de primero categoría.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento10-recibo-arrendamiento",
          },
          {
            id: "1.1.2.7",
            title:
              "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 03 Boleta de Venta",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 03 Boleta de Venta.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento03-boleta-venta",
          },
          {
            id: "1.1.2.8",
            title:
              "Validación de Libro Electrónico de Compras - Error número de serie para el documento de tipo 06 Carta de Porte Aéreo",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 06 Carta de Porte Aéreo.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento06-carta-porte",
          },
          {
            id: "1.1.2.9",
            title:
              "Validación de Libro Electrónico de Compras - Fecha de documento de referencia no debe ser mayor a fecha de documento para el tipo de documento 07 Nota de crédito",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por consignar de forma errónea la fecha del documento de referencia para el tipo de documento Nota de crédito, ésta no debe ser mayor que la fecha de documento.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-documento07-nota-credito",
          },
          {
            id: "1.1.2.10",
            title:
              "Validación de Libro Electrónico de Compras - Falta documento de referencia para el documento tipo 07 Nota de Crédito",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar los datos del documento de referencia para el documento tipo 07 Nota de Crédito.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/falta-documento07-nota-credito",
          },
          {
            id: "1.1.2.11",
            title:
              "Validación de Libro Electrónico de Compras - Fecha de vencimiento debe ser menor o igual al periodo de proceso para tipo de documento 14 Recibo de servicios públicos",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación cuando la fecha de vencimiento del documento se ha registrado de forma incorrecta, debiendo ser menor o igual al periodo de proceso.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/fecha-vencimiento-documento14",
          },
          {
            id: "1.1.2.12",
            title:
              "Validación de Libro Electrónico de Compras - Error en número de serie para el documento de tipo 52 DUA Simplificada",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación porque en la serie del número de documento los datos están mal ingresados o éstos contienen caracteres no válidos.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento52-dua-simplificada",
          },
          {
            id: "1.1.2.13",
            title:
              "Validación de Libro Electrónico de Compras - Error número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros",
            description:
              "Al intentar generar el libro electrónico de Registro de Compras aparece una observación por no consignar correctamente el número de serie para el documento de tipo 55 BVME para transporte ferroviario de pasajeros.",
            href: "/tutoriales/libros-electronicos/libros-electronicos/libro-electronico-registro-compras/validacion-registro-compras-ple/error-documento55-transporte-ferroviario",
          },
        ],
      },
      {
        id: "1.1.3",
        title: "Carga del Libro Electrónico de Compras al PLE-SUNAT",
        description:
          "Este tutorial contiene todo lo relacionado a la validación y envío del libro electrónico de compras en el PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.1.3.1",
            title: "Cómo Cargar el Libro Electrónico de Compras al PLE-SUNAT",
            description:
              "Procedimiento para cargar el libro electrónico de compras al programa de libros electrónicos PLE-SUNAT.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.1.3.2",
            title: "Cómo subsanar inconsistencias en el PLE-SUNAT",
            description:
              "Cómo subsanar las inconsistencias que el PLE detecta en el proceso de validación de los libros electrónicos.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.1.4",
        title:
          "Errores detectados en el PLE-SUNAT al validar el libro electrónico de compras",
        description:
          "El programa de libros electrónicos (PLE-SUNAT) emite una constancia con los errores detectados al validar el libro electrónico de compras. Se detallan los errores más comunes y como subsanarlos.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.1.4.1",
            title:
              "Validación en PLE-SUNAT: El número de documento de identidad es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque el número de documento de identidad es incorrecto.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.1.4.2",
            title: "Validación en PLE-SUNAT: El valor es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque en el número de comprobante de pago o documento hay caracteres que no son válidos para el campo.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.1.5",
        title: "Consultas Libro Electrónico de Compras",
        description:
          "Este tutorial contiene consultas que se pueden presentar en el proceso de la generación del libro electrónico de compras en el sistema CONCAR® y que requieren asistencia para ser superadas.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.1.5.1",
            title:
              "Cómo generar el libro electrónico de compras de un mes sin movimiento",
            description:
              "Procedimiento para la generación del archivo TXT del libro electrónico de compras de un mes sin movimiento.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
    ],
  },
  {
    id: "1.2",
    title: "Libro Electrónico Registro de Ventas",
    description:
      "En este tutorial se detalla el proceso para la generación, validación y carga óptima del libro electrónico de ventas en el Programa de Libros Electrónicos (PLE-SUNAT).",
    href: "/tutoriales/libros-electronicos",
    subtitle2: [
      {
        id: "1.2.1",
        title: "Generación del Libro Electrónico de Ventas",
        description:
          "Este tutorial contiene todo lo relacionado a la creación del libro electrónico de ventas en el sistema CONCAR®.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.2.1.1",
            title: "Cómo Generar el Libro Electrónico de Ventas",
            description:
              "El presente documento detalla el procedimiento a realizar en el CONCAR para generar el libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.1.2",
            title:
              "Estado o Indicador de la Operación en el Libro Electrónico de Ventas",
            description:
              "Procedimiento para registrar operaciones de ventas según el estado a informar.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.1.3",
            title:
              "Rectificación - Registros Adicionales en Registro de ventas Electrónico",
            description:
              "En esta opción solo se registrarán las rectificaciones de los comprobantes de ventas que se informarán en la declaración del libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.2.2",
        title: "Validación de Registro de Ventas - PLE",
        description:
          "Reporte que emite el CONCAR® automáticamente, al generar el libro electrónico de compras, cuando detecta observaciones en los comprobantes registrados que impidan la carga del libro electrónico al PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.2.2.1",
            title:
              "Validación de Libro Electrónico de Ventas - Número de documento no debe estar en blanco o en cero",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar el número de documento en el registro, el campo no debe estar en blanco ni ser cero.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.2.2",
            title:
              "Validación de Libro Electrónico de Ventas - Número de documento no debe estar en blanco o en cero",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar el número de serie del documento registrado.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.1.2.3",
            title:
              "Validación de Libro Electrónico de Ventas - Error en número de serie para el documento de tipo 01 Factura",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 01 Factura",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.2.4",
            title:
              "Validación de Libro Electrónico de Ventas - Para código de documento SUNAT 01 Factura, documento de proveedor debe ser código 6 RUC",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no seleccionar un tipo de documento correcto para un proveedor del exterior.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.2.5",
            title:
              "Validación de Libro Electrónico de Ventas - Error en número de serie para tipo de documento 02 Recibo por Honorarios",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie del tipo de documento recibo por honorarios.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.2.6",
            title:
              "Validación de Libro Electrónico de Ventas - Error en número de serie para el documento de tipo 10 Recibo por Arrendamiento",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación porque el número de serie del documento tipo 10 Recibo por arrendamiento está incompleto y falta registrar el código por el aporte de renta de primero categoría.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.2.7",
            title:
              "Validación de Libro Electrónico de Ventas - Error en número de serie para el documento de tipo 03 Boleta de Venta",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 03 Boleta de Venta.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.2.8",
            title:
              "Validación de Libro Electrónico de Ventas - Error número de serie para el documento de tipo 06 Carta de Porte Aéreo",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar correctamente el número de serie para el documento de tipo 06 Carta de Porte Aéreo.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.2.3",
        title: "Carga del Libro Electrónico de Ventas al PLE-SUNAT",
        description:
          "Este tutorial contiene todo lo relacionado a la validación y envío del libro electrónico de compras en el PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.2.3.1",
            title: "Cómo Cargar el Libro Electrónico de Ventas al PLE-SUNAT",
            description:
              "Procedimiento para cargar el libro electrónico de Ventas al programa de libros electrónicos PLE-SUNAT.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.3.2",
            title: "Cómo subsanar inconsistencias en el PLE-SUNAT",
            description:
              "Cómo subsanar las inconsistencias que el PLE detecta en el proceso de validación de los libros electrónicos.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.2.4",
        title:
          "Errores detectados en el PLE-SUNAT al validar el libro electrónico de Ventas",
        description:
          "El programa de libros electrónicos (PLE-SUNAT) emite una constancia con los errores detectados al validar el libro electrónico de compras. Se detallan los errores más comunes y como subsanarlos.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.2.4.1",
            title:
              "Validación en PLE-SUNAT: El número de documento de identidad es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque el número de documento de identidad es incorrecto.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.2.4.2",
            title: "Validación en PLE-SUNAT: El valor es incorrecto",
            description:
              "Al intentar validar el libro electrónico de compras o ventas en el PLE - SUNAT aparece una observación porque en el número de comprobante de pago o documento hay caracteres que no son válidos para el campo.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.2.5",
        title: "Consultas Libro Electrónico de Ventas",
        description:
          "Este tutorial contiene consultas que se pueden presentar en el proceso de la generación del libro electrónico de Ventas en el sistema CONCAR® y que requieren asistencia para ser superadas.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.2.5.1",
            title:
              "Cómo generar el libro electrónico de Ventas de un mes sin movimiento",
            description:
              "Procedimiento para la generación del archivo TXT del libro electrónico de compras de un mes sin movimiento.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
    ],
  },
  {
    id: "1.3",
    title: "Libros Electrónicos Diario, Diario Simplificado y Mayor",
    description:
      "Se detalla el proceso para la generación, validación y carga óptima de los libros electrónicos Diario, Diario Simplificado y Mayor en el Programa de Libros Electrónicos (PLE-SUNAT).",
    href: "/tutoriales/libros-electronicos",
    subtitle2: [
      {
        id: "1.3.1",
        title: "Generación del Libro Electrónico de Ventas",
        description:
          "Este tutorial contiene todo lo relacionado a la creación del libro electrónico de ventas en el sistema CONCAR®.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.3.1.1",
            title: "Cómo Generar el Libro Electrónico de Ventas",
            description:
              "El presente documento detalla el procedimiento a realizar en el CONCAR para generar el libro electrónico de compras.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.3.1.2",
            title:
              "Estado o Indicador de la Operación en el Libro Electrónico de Ventas",
            description:
              "Procedimiento para registrar operaciones de ventas según el estado a informar.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.3.2",
        title: "Validación de Registro de Ventas - PLE",
        description:
          "Reporte que emite el CONCAR® automáticamente, al generar el libro electrónico de compras, cuando detecta observaciones en los comprobantes registrados que impidan la carga del libro electrónico al PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.3.2.1",
            title:
              "Validación de Libro Electrónico de Ventas - Número de documento no debe estar en blanco o en cero",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar el número de documento en el registro, el campo no debe estar en blanco ni ser cero.",
            href: "/tutoriales/libros-electronicos/",
          },
          {
            id: "1.3.2.2",
            title:
              "Validación de Libro Electrónico de Ventas - Número de documento no debe estar en blanco o en cero",
            description:
              "Al intentar generar el libro electrónico de Registro de Ventas aparece una observación por no consignar el número de serie del documento registrado.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
      {
        id: "1.3.3",
        title: "Carga del Libro Electrónico de Ventas al PLE-SUNAT",
        description:
          "Este tutorial contiene todo lo relacionado a la validación y envío del libro electrónico de compras en el PLE-SUNAT.",
        href: "/tutoriales/libros-electronicos/",
        subtitle3: [
          {
            id: "1.3.3.1",
            title: "Cómo Cargar el Libro Electrónico de Ventas al PLE-SUNAT",
            description:
              "Procedimiento para cargar el libro electrónico de Ventas al programa de libros electrónicos PLE-SUNAT.",
            href: "/tutoriales/libros-electronicos/",
          },
        ],
      },
    ],
  },
];
