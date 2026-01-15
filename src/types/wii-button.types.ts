/**
 * Wii Button Component Types and Interfaces
 * 
 * This file contains TypeScript types and interfaces used throughout
 * the WiiButton component and related utilities.
 */

/**
 * Props interface for the WiiButton component
 * 
 * @interface WiiButtonProps
 * @example
 * ```tsx
 * const buttonProps: WiiButtonProps = {
 *   children: 'Click Me',
 *   onClick: () => console.log('clicked'),
 *   wide: false,
 *   hoverSound: '/sounds/wii-hover.mp3',
 *   clickSound: '/sounds/wii-click.mp3'
 * }
 * ```
 */
export interface WiiButtonProps {
  /**
   * Content to display inside the button
   * Can be text, icons, or any React node
   */
  children: React.ReactNode

  /**
   * Callback function triggered when the button is clicked
   * Only called when button is not disabled
   * 
   * @optional
   */
  onClick?: () => void

  /**
   * Whether the button should display in wide mode
   * 
   * Wide mode (true):
   * - Full width or larger container width
   * - More rounded corners (rounded-2xl)
   * - Better for bottom navigation bars
   * - Useful for "Continue" or main actions
   * 
   * Normal mode (false):
   * - Pill-shaped (rounded-full)
   * - More compact
   * - Good for multiple buttons in a row
   * - Default channel/menu button style
   * 
   * @default false
   */
  wide?: boolean

  /**
   * Path to the hover sound effect file
   * 
   * Triggers on mouse enter
   * Formats supported: MP3, WAV, OGG
   * 
   * @example '/sounds/wii-hover.mp3'
   * @optional
   */
  hoverSound?: string

  /**
   * Path to the click sound effect file
   * 
   * Triggers immediately on button click
   * Formats supported: MP3, WAV, OGG
   * 
   * @example '/sounds/wii-click.mp3'
   * @optional
   */
  clickSound?: string

  /**
   * Additional CSS classes to customize the button
   * 
   * Use Tailwind classes for styling:
   * - Color: text-wii-dark, text-wii-blue
   * - Size: px-10, py-5, text-xl
   * - Weight: font-bold, font-semibold
   * - Effects: shadow-lg, border-2
   * 
   * @example 'text-xl font-bold text-wii-blue'
   * @optional
   */
  className?: string

  /**
   * Whether the button is disabled
   * 
   * When true:
   * - Button cannot be clicked
   * - Opacity reduced to 0.5
   * - Cursor changes to not-allowed
   * - No hover or click events trigger
   * - Sounds do not play
   * 
   * @default false
   */
  disabled?: boolean
}

/**
 * Configuration for button animation physics
 * Used with Framer Motion spring transitions
 */
export interface ButtonAnimationConfig {
  /** Scale multiplier on hover (1.05 = 5% larger) */
  hoverScale: number
  /** Spring stiffness (higher = snappier, 400 default) */
  springStiffness: number
  /** Spring damping (higher = less bouncy, 10 default) */
  springDamping: number
}

/**
 * Default animation configuration for WiiButton
 */
export const DEFAULT_ANIMATION_CONFIG: ButtonAnimationConfig = {
  hoverScale: 1.05,
  springStiffness: 400,
  springDamping: 10,
}

/**
 * Configuration for sound effects
 */
export interface SoundConfig {
  /** Volume level (0 = silent, 1 = full volume) */
  volume: number
  /** Whether to interrupt existing playback */
  interrupt: boolean
  /** Playback rate (1 = normal, 0.5 = half speed) */
  rate?: number
}

/**
 * Default hover sound configuration
 */
export const DEFAULT_HOVER_SOUND_CONFIG: SoundConfig = {
  volume: 0.5,
  interrupt: true,
}

/**
 * Default click sound configuration
 */
export const DEFAULT_CLICK_SOUND_CONFIG: SoundConfig = {
  volume: 0.6,
  interrupt: true,
}

/**
 * Wii color palette types
 */
export interface WiiColorPalette {
  blue: string
  lightBlue: string
  white: string
  gray: string
  dark: string
}

/**
 * Default Wii color palette
 */
export const WII_COLOR_PALETTE: WiiColorPalette = {
  blue: '#3b7dd9',
  lightBlue: '#88c0e8',
  white: '#f5f5f5',
  gray: '#e8e8e8',
  dark: '#333333',
}

/**
 * Event handler types
 */
export type ButtonClickHandler = () => void | Promise<void>
export type ButtonHoverHandler = () => void

/**
 * Button variant types
 */
export type ButtonVariant = 'default' | 'wide' | 'small' | 'large'

/**
 * Button state types
 */
export interface ButtonState {
  isHovered: boolean
  isPressed: boolean
  isDisabled: boolean
  isFocused: boolean
}

/**
 * Animation variant definitions for Framer Motion
 */
export interface MotionVariants {
  rest: {
    scale: number
    [key: string]: any
  }
  hover: {
    scale: number
    transition: any
    [key: string]: any
  }
}

/**
 * Accessibility attributes for the button
 */
export interface ButtonA11yAttributes {
  role: 'button'
  tabIndex: number
  'aria-disabled': boolean
  'aria-pressed'?: boolean
  'aria-label'?: string
}

/**
 * Extended button props with internal state
 */
export interface InternalWiiButtonProps extends WiiButtonProps {
  /** Internal state for hover */
  __internalHovered?: boolean
  /** Internal reference */
  __internalRef?: React.RefObject<HTMLButtonElement>
}

/**
 * Type guard to check if a value is a valid WiiButtonProps
 */
export function isValidWiiButtonProps(
  props: any
): props is WiiButtonProps {
  return (
    props &&
    typeof props === 'object' &&
    (props.children || typeof props.children === 'string')
  )
}

/**
 * Utility type to make all props optional except children
 */
export type RequireChildrenOnly<T> = T & { children: React.ReactNode }

/**
 * Type for button click event
 */
export type WiiButtonClickEvent = React.MouseEvent<HTMLButtonElement>

/**
 * Type for button hover event
 */
export type WiiButtonHoverEvent = React.MouseEvent<HTMLButtonElement>

export default WiiButtonProps
