// ============================================================
// growlat.preset.js — Design System Growlat para PrimeVue 4
// Base: Aura preset extendido con tokens de Growlat DS
// Base tipográfica: 1rem = 16px
// Hermano de convos.preset.js — misma estructura, brand violet
// ============================================================

import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const GrowlatPreset = definePreset(Aura, {

  // ─────────────────────────────────────────────
  // 1. PRIMITIVOS — Paleta de color cruda
  // ─────────────────────────────────────────────
  primitive: {

    green: {
      50:  '#E6FAF4',
      100: '#B3E8D8',
      200: '#80D6BC',
      300: '#4DC4A0',
      400: '#26B58B',
      500: '#039F73',
      600: '#027A59',
      700: '#025540',
      800: '#013026',
      900: '#000F0C',
      950: '#000806',
    },

    violet: {
      50:  '#F3EEFF',
      100: '#E0D0FF',
      200: '#C4AAFF',
      300: '#A880FF',
      400: '#8C5AF0',
      500: '#6D2FE6',
      600: '#5420C4',
      700: '#3D1599',
      800: '#280D6E',
      900: '#140642',
      950: '#0A0321',
    },

    dsNeutral: {
      0:   '#FFFFFF',
      50:  '#F5F5F7',
      100: '#E5E5EA',
      200: '#F0F0F2',
      300: '#AEAEB2',
      400: '#6B6B72',
      500: '#424242',
      600: '#2C2C2E',
      nav: '#0E1721',
    },

    red: {
      50:  '#FEF2F2',
      100: '#FECACA',
      200: '#FCA5A5',
      300: '#F87171',
      400: '#EF4444',
      500: '#DC2626',
      600: '#B91C1C',
    },

    indigo: {
      50:  '#EDE9FF',
      100: '#C4B5FD',
      200: '#A78BFA',
      300: '#8B5CF6',
      400: '#7C3AED',
      500: '#5B21B6',
    },

    yellow: {
      50:  '#FEFCE8',
      100: '#FBF0C2',
      200: '#F6E05E',
      300: '#ECC94B',
      400: '#D69E2E',
      500: '#92400E',
    },

    pink: {
      50:  '#FDF0F8',
      100: '#F9D5EC',
      200: '#F0ABCF',
      300: '#E879A8',
      400: '#DB2777',
      500: '#BE185D',
    },
  },

  // ─────────────────────────────────────────────
  // 2. SEMÁNTICOS
  // ─────────────────────────────────────────────
  semantic: {

    primary: {
      50:  '{violet.50}',
      100: '{violet.100}',
      200: '{violet.200}',
      300: '{violet.300}',
      400: '{violet.400}',
      500: '{violet.500}',
      600: '{violet.600}',
      700: '{violet.700}',
      800: '{violet.800}',
      900: '{violet.900}',
      950: '{violet.950}',
    },

    borderRadius: {
      sm:   '0.25rem',
      md:   '0.5rem',
      lg:   '0.75rem',
      xl:   '0.875rem',
      full: '6.25rem',
    },

    focusRing: {
      width:  '0.1875rem',
      style:  'solid',
      color:  '{violet.500}',
      offset: '0',
    },

    colorScheme: {
      light: {
        primary: {
          color:          '{violet.500}',
          inverseColor:   '#FFFFFF',
          hoverColor:     '{violet.700}',   // hover → 700
          activeColor:    '{violet.600}',   // primary-dark → 600
        },
        highlight: {
          background:      '{violet.50}',
          focusBackground: '{violet.100}',
          color:           '{violet.500}',
          focusColor:      '{violet.600}',
        },
        surface: {
          0:   '#FFFFFF',
          50:  '{dsNeutral.50}',
          100: '{dsNeutral.100}',
          200: '{dsNeutral.200}',
          300: '{dsNeutral.300}',
          400: '{dsNeutral.400}',
          500: '{dsNeutral.500}',
          600: '{dsNeutral.600}',
        },
        text: {
          color:           '{dsNeutral.500}',
          hoverColor:      '{dsNeutral.600}',
          mutedColor:      '{dsNeutral.300}',
          hoverMutedColor: '{dsNeutral.400}',
        },
        content: {
          background:      '#FFFFFF',
          hoverBackground: '{dsNeutral.50}',
          borderColor:     '{dsNeutral.100}',
          color:           '{dsNeutral.500}',
          hoverColor:      '{dsNeutral.600}',
        },
        overlay: {
          select: {
            background:  '#FFFFFF',
            borderColor: '{dsNeutral.100}',
            color:       '{dsNeutral.500}',
          },
          popover: {
            background:   '#FFFFFF',
            borderColor:  '{dsNeutral.100}',
            color:        '{dsNeutral.500}',
          },
          modal: {
            background:  '#FFFFFF',
            borderColor: '{dsNeutral.100}',
            color:       '{dsNeutral.500}',
          },
        },
        list: {
          option: {
            focusBackground:         '{violet.50}',
            selectedBackground:      '{violet.50}',
            selectedFocusBackground: '{violet.100}',
            color:                   '{dsNeutral.500}',
            focusColor:              '{dsNeutral.500}',
            selectedColor:           '{violet.500}',
            selectedFocusColor:      '{violet.600}',
            icon: {
              color:      '{dsNeutral.300}',
              focusColor: '{dsNeutral.400}',
            },
          },
          optionGroup: {
            background: 'transparent',
            color:      '{dsNeutral.300}',
          },
        },
        navigation: {
          item: {
            focusBackground:  '{violet.50}',
            activeBackground: '{violet.50}',
            color:            '{dsNeutral.500}',
            focusColor:       '{dsNeutral.500}',
            activeColor:      '{violet.500}',
            icon: {
              color:       '{dsNeutral.300}',
              focusColor:  '{dsNeutral.400}',
              activeColor: '{violet.500}',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color:      '{dsNeutral.300}',
          },
          submenuIcon: {
            color:       '{dsNeutral.300}',
            focusColor:  '{dsNeutral.400}',
            activeColor: '{violet.500}',
          },
        },
      },
    },
  },

  // ─────────────────────────────────────────────
  // 3. COMPONENTES
  // ─────────────────────────────────────────────
  components: {

    // ── Button ──────────────────────────────────
    button: {
      root: {
        borderRadius: '{borderRadius.sm}',
        paddingX:     '0.75rem',
        paddingY:     '0.375rem',
        fontSize:     '0.75rem',
        fontWeight:   '600',
        gap:          '0.5rem',
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background:        '{violet.500}',
              hoverBackground:   '{violet.700}',   // hover → 700
              activeBackground:  '{violet.600}',   // primary-dark → 600
              borderColor:       '{violet.500}',
              hoverBorderColor:  '{violet.700}',
              activeBorderColor: '{violet.600}',
              color:             '#FFFFFF',
              hoverColor:        '#FFFFFF',
              activeColor:       '#FFFFFF',
            },
            secondary: {
              background:        'transparent',
              hoverBackground:   '{dsNeutral.50}',
              activeBackground:  '{dsNeutral.100}',
              borderColor:       '{dsNeutral.100}',
              hoverBorderColor:  '{dsNeutral.200}',
              activeBorderColor: '{dsNeutral.200}',
              color:             '{dsNeutral.400}',
              hoverColor:        '{dsNeutral.500}',
              activeColor:       '{dsNeutral.500}',
            },
            danger: {
              background:  '{red.500}',
              borderColor: '{red.500}',
              color:       '#FFFFFF',
            },
          },
        },
      },
    },

    // ── InputText ───────────────────────────────
    inputtext: {
      root: {
        borderRadius:      '{borderRadius.sm}',
        paddingX:          '0.75rem',
        paddingY:          '0.25rem',
        fontSize:          '0.75rem',
        color:             '{dsNeutral.500}',
        background:        '{dsNeutral.0}',        // blanco siempre
        borderColor:       '{dsNeutral.100}',
        hoverBorderColor:  '{violet.500}',
        focusBorderColor:  '{violet.500}',
        placeholderColor:  '{dsNeutral.300}',
        shadow:            'none',
      },
    },

    // ── Select / Dropdown ────────────────────────
    select: {
      root: {
        borderRadius:      '{borderRadius.sm}',
        paddingX:          '0.75rem',
        paddingY:          '0.25rem',
        fontSize:          '0.75rem',
        color:             '{dsNeutral.500}',
        background:        '{dsNeutral.0}',        // blanco siempre
        borderColor:       '{dsNeutral.100}',
        hoverBorderColor:  '{violet.500}',
        focusBorderColor:  '{violet.500}',
        shadow:            'none',
      },
      option: {
        borderRadius:       '{borderRadius.sm}',
        selectedBackground: '{violet.50}',
        selectedColor:      '{violet.500}',
        focusBackground:    '{dsNeutral.50}',
        focusColor:         '{dsNeutral.500}',
      },
      overlay: {
        borderRadius: '{borderRadius.md}',
        shadow:       '0 0.5rem 1.5rem rgba(0,0,0,0.10)',
        borderColor:  '{dsNeutral.100}',
      },
    },

    // ── DataTable ────────────────────────────────
    datatable: {
      root: {
        borderColor:  '{dsNeutral.100}',
        borderRadius: '{borderRadius.lg}',
      },
      header: {
        background:  '{dsNeutral.50}',
        borderColor: '{dsNeutral.100}',
        color:       '{dsNeutral.300}',
        fontSize:    '0.625rem',
        fontWeight:  '700',
        padding:     '0.5rem 1.25rem',
      },
      headerCell: {
        background:      '{dsNeutral.50}',
        hoverBackground: '{dsNeutral.50}',
        color:           '{dsNeutral.300}',
        hoverColor:      '{dsNeutral.400}',
        borderColor:     '{dsNeutral.100}',
        padding:         '0.5rem 1.25rem',
        fontSize:        '0.625rem',
        fontWeight:      '700',
      },
      row: {
        background:          '#FFFFFF',
        hoverBackground:     '{dsNeutral.50}',
        selectedBackground:  '{violet.50}',
        color:               '{dsNeutral.500}',
        hoverColor:          '{dsNeutral.500}',
        selectedColor:       '{dsNeutral.500}',
        borderColor:         '{dsNeutral.200}',
        stripedBackground:   '#FFFFFF',
      },
      bodyCell: {
        padding:     '0.5rem 1.25rem',
        fontSize:    '0.75rem',
        borderColor: '{dsNeutral.200}',
      },
      footer: {
        background:  '{dsNeutral.50}',
        borderColor: '{dsNeutral.100}',
        color:       '{dsNeutral.300}',
        padding:     '0.75rem 1.25rem',
        fontSize:    '0.625rem',
      },
      sortIcon: {
        color:      '{dsNeutral.300}',
        hoverColor: '{dsNeutral.400}',
      },
    },

    // ── Paginator ────────────────────────────────
    paginator: {
      root: {
        background:   '{dsNeutral.50}',
        borderColor:  '{dsNeutral.100}',
        color:        '{dsNeutral.400}',
        padding:      '0.75rem 1.25rem',
        gap:          '0.5rem',
        borderRadius: '{borderRadius.lg}',
      },
      navButton: {
        background:          '#FFFFFF',
        hoverBackground:     '{violet.50}',
        selectedBackground:  '{violet.500}',
        borderColor:         '{dsNeutral.100}',
        hoverBorderColor:    '{violet.100}',
        selectedBorderColor: '{violet.500}',
        color:               '{dsNeutral.400}',
        hoverColor:          '{violet.500}',
        selectedColor:       '#FFFFFF',
        width:               '1.875rem',
        height:              '1.875rem',
        borderRadius:        '{borderRadius.sm}',
        fontSize:            '0.75rem',
      },
    },

    // ── Badge ────────────────────────────────────
    badge: {
      root: {
        borderRadius: '{borderRadius.full}',
        fontSize:     '0.625rem',
        fontWeight:   '600',
        padding:      '0.1875rem 0.5rem',
        minWidth:     'unset',
      },
      colorScheme: {
        light: {
          root: {
            success: {
              background: '{green.50}',
              color:      '{green.500}',
            },
            danger: {
              background: '{red.50}',
              color:      '{red.500}',
            },
            warning: {
              background: '{yellow.50}',
              color:      '{yellow.500}',
            },
            info: {
              background: '{indigo.50}',
              color:      '{indigo.500}',
            },
            secondary: {
              background: '{dsNeutral.100}',
              color:      '{dsNeutral.500}',
            },
          },
        },
      },
    },

    // ── Tag ──────────────────────────────────────
    tag: {
      root: {
        borderRadius: '{borderRadius.full}',
        fontSize:     '0.625rem',
        fontWeight:   '600',
        padding:      '0.1875rem 0.5rem',
      },
    },

    // ── Card ─────────────────────────────────────
    card: {
      root: {
        background:   '#FFFFFF',
        borderRadius: '{borderRadius.lg}',
        color:        '{dsNeutral.500}',
        shadow:       'none',
        borderColor:  '{dsNeutral.100}',
      },
      title: {
        fontSize:   '0.875rem',
        fontWeight: '700',
      },
      subtitle: {
        color: '{dsNeutral.300}',
      },
      body: {
        padding: '1rem',
        gap:     '0.5rem',
      },
    },

    // ── Dialog ───────────────────────────────────
    dialog: {
      root: {
        borderRadius: '{borderRadius.lg}',
        background:   '#FFFFFF',
        color:        '{dsNeutral.500}',
        borderColor:  '{dsNeutral.100}',
        shadow:       '0 1rem 3rem rgba(0,0,0,0.15)',
      },
      header: {
        padding:    '1rem 1.25rem',
        gap:        '0.5rem',
        fontSize:   '0.9375rem',
        fontWeight: '700',
      },
      content: {
        padding: '0 1.25rem 1rem',
      },
      footer: {
        padding:     '0.75rem 1.25rem',
        gap:         '0.5rem',
        borderColor: '{dsNeutral.100}',
      },
      closeButton: {
        hoverBackground: '{dsNeutral.50}',
        color:           '{dsNeutral.300}',
        hoverColor:      '{dsNeutral.500}',
        borderRadius:    '{borderRadius.sm}',
      },
    },

    // ── Drawer / Sidebar ─────────────────────────
    drawer: {
      root: {
        background:  '#FFFFFF',
        borderColor: '{dsNeutral.100}',
        color:       '{dsNeutral.500}',
        shadow:      '-0.5rem 0 2rem rgba(0,0,0,0.12)',
      },
      header: {
        padding:    '1rem 1.25rem',
        gap:        '0.5rem',
        fontSize:   '0.9375rem',
        fontWeight: '700',
      },
      content: {
        padding: '0 1.25rem',
      },
      footer: {
        padding:     '0.75rem 1.25rem',
        gap:         '0.5rem',
        borderColor: '{dsNeutral.100}',
      },
      closeButton: {
        hoverBackground: '{dsNeutral.50}',
        color:           '{dsNeutral.300}',
        hoverColor:      '{dsNeutral.500}',
        borderRadius:    '{borderRadius.sm}',
      },
    },

    // ── Toast ────────────────────────────────────
    toast: {
      root: {
        borderRadius: '{borderRadius.lg}',
        width:        '22rem',
        shadow:       '0 0.25rem 1rem rgba(0,0,0,0.10)',
      },
      content: {
        padding: '0.75rem 1rem',
        gap:     '0.5rem',
      },
      summary: {
        fontSize:   '0.75rem',
        fontWeight: '700',
      },
      detail: {
        fontSize:   '0.6875rem',
        fontWeight: '400',
        color:      '{dsNeutral.400}',
      },
      closeButton: {
        hoverBackground: 'rgba(0,0,0,0.06)',
        borderRadius:    '{borderRadius.sm}',
      },
      colorScheme: {
        light: {
          root: {
            success: {
              background:  '{green.50}',
              borderColor: '{green.100}',
              color:       '{green.500}',
            },
            error: {
              background:  '{red.50}',
              borderColor: '{red.100}',
              color:       '{red.500}',
            },
            warn: {
              background:  '{yellow.50}',
              borderColor: '{yellow.100}',
              color:       '{yellow.500}',
            },
            info: {
              background:  '{indigo.50}',
              borderColor: '{indigo.100}',
              color:       '{indigo.500}',
            },
          },
        },
      },
    },

    // ── Checkbox ─────────────────────────────────
    checkbox: {
      root: {
        borderRadius:           '{borderRadius.sm}',
        width:                  '1.125rem',
        height:                 '1.125rem',
        background:             '#FFFFFF',
        checkedBackground:      '{violet.500}',
        checkedHoverBackground: '{violet.600}',
        borderColor:            '{dsNeutral.100}',
        hoverBorderColor:       '{violet.500}',
        checkedBorderColor:     '{violet.500}',
        shadow:                 'none',
      },
      icon: {
        size:         '0.625rem',
        color:        '#FFFFFF',
        checkedColor: '#FFFFFF',
      },
    },

    // ── ToggleSwitch ─────────────────────────────
    toggleswitch: {
      root: {
        width:                  '2.25rem',
        height:                 '1.25rem',
        borderRadius:           '{borderRadius.full}',
        background:             '{dsNeutral.100}',
        checkedBackground:      '{violet.500}',
        hoverCheckedBackground: '{violet.600}',
        shadow:                 'none',
      },
      handle: {
        size:         '1rem',
        background:   '#FFFFFF',
        borderRadius: '{borderRadius.full}',
        shadow:       '0 0.0625rem 0.1875rem rgba(0,0,0,0.15)',
      },
    },

    // ── Tabs ─────────────────────────────────────
    tabs: {
      tablist: {
        background:  'transparent',
        borderColor: '{dsNeutral.100}',
        borderWidth: '0 0 0.0625rem 0',
      },
      tab: {
        background:        'transparent',
        hoverBackground:   'transparent',
        activeBackground:  'transparent',
        borderColor:       'transparent',
        hoverBorderColor:  '{dsNeutral.300}',
        activeBorderColor: '{violet.500}',
        color:             '{dsNeutral.300}',
        hoverColor:        '{dsNeutral.500}',
        activeColor:       '{violet.600}',   // primary-dark → 600
        padding:           '0.625rem 1rem',
        fontSize:          '0.75rem',
        fontWeight:        '500',
        activeFontWeight:  '600',
      },
      tabpanel: {
        background: 'transparent',
        color:      '{dsNeutral.500}',
        padding:    '1rem 0',
      },
    },

    // ── Menu ─────────────────────────────────────
    menu: {
      root: {
        background:   '#FFFFFF',
        borderColor:  '{dsNeutral.100}',
        borderRadius: '{borderRadius.md}',
        shadow:       '0 0.5rem 1.5rem rgba(0,0,0,0.10)',
        color:        '{dsNeutral.500}',
        padding:      '0.25rem',
      },
      item: {
        padding:          '0.5rem 0.75rem',
        borderRadius:     '{borderRadius.sm}',
        color:            '{dsNeutral.500}',
        focusBackground:  '{dsNeutral.50}',
        activeBackground: '{violet.50}',
        focusColor:       '{dsNeutral.500}',
        activeColor:      '{violet.500}',
        fontSize:         '0.75rem',
        fontWeight:       '500',
        gap:              '0.5rem',
        icon: {
          color:       '{dsNeutral.300}',
          focusColor:  '{dsNeutral.400}',
          activeColor: '{violet.500}',
        },
      },
      separator: {
        borderColor: '{dsNeutral.100}',
        margin:      '0.25rem 0',
      },
    },

    // ── Avatar ───────────────────────────────────
    avatar: {
      root: {
        width:        '1.75rem',
        height:       '1.75rem',
        fontSize:     '0.625rem',
        fontWeight:   '700',
        borderRadius: '{borderRadius.full}',
        background:   '{violet.500}',
        color:        '#FFFFFF',
      },
    },

    // ── Chip ─────────────────────────────────────
    chip: {
      root: {
        borderRadius: '{borderRadius.full}',
        paddingX:     '0.5rem',
        paddingY:     '0.1875rem',
        fontSize:     '0.625rem',
        fontWeight:   '500',
        background:   '{dsNeutral.50}',
        color:        '{dsNeutral.400}',
      },
    },

    // ── Skeleton ─────────────────────────────────
    skeleton: {
      root: {
        background:          '{dsNeutral.100}',
        animationBackground: 'rgba(255,255,255,0.5)',
        borderRadius:        '{borderRadius.sm}',
      },
    },

    // ── ProgressBar ──────────────────────────────
    progressbar: {
      root: {
        background:   '{dsNeutral.100}',
        borderRadius: '{borderRadius.full}',
        height:       '0.375rem',
      },
      value: {
        background: '{violet.500}',
      },
    },

    // ── Divider ──────────────────────────────────
    divider: {
      root: {
        borderColor: '{dsNeutral.100}',
      },
      content: {
        background: '#FFFFFF',
        color:      '{dsNeutral.300}',
        fontSize:   '0.625rem',
        fontWeight: '600',
      },
    },

    // ── Breadcrumb ───────────────────────────────
    breadcrumb: {
      root: {
        padding:    '0.5rem 0',
        background: 'transparent',
      },
      item: {
        color:       '{dsNeutral.300}',
        hoverColor:  '{violet.500}',
        activeColor: '{dsNeutral.500}',
        fontSize:    '0.6875rem',
        fontWeight:  '500',
      },
      separator: {
        color: '{dsNeutral.200}',
      },
    },

    // ── Accordion ────────────────────────────────
    accordion: {
      root: {
        borderColor:  '{dsNeutral.100}',
        borderRadius: '{borderRadius.lg}',
      },
      header: {
        color:           '{dsNeutral.500}',
        hoverColor:      '{dsNeutral.600}',
        activeColor:     '{violet.500}',
        background:      '#FFFFFF',
        hoverBackground: '{dsNeutral.50}',
        borderColor:     '{dsNeutral.100}',
        padding:         '0.75rem 1rem',
        fontWeight:      '600',
        fontSize:        '0.75rem',
      },
      content: {
        background:  '#FFFFFF',
        color:       '{dsNeutral.500}',
        padding:     '0 1rem 1rem',
        borderColor: '{dsNeutral.100}',
      },
    },
  },
})

export default GrowlatPreset

// ─────────────────────────────────────────────────────────────────
// USO EN main.js:
//
// import PrimeVue from 'primevue/config'
// import GrowlatPreset from './theme/growlat.preset.js'
//
// app.use(PrimeVue, {
//   theme: {
//     preset: GrowlatPreset,
//     options: {
//       darkModeSelector: '.dark',
//       cssLayer: false,
//     }
//   }
// })
// ─────────────────────────────────────────────────────────────────
