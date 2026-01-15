# Audio Files Directory

Place your Wii-inspired sound files here:

- `wii-hover.mp3` - Short beep sound (~100-200ms)
- `wii-click.mp3` - Click/select sound (~200-300ms)

## Recommended Sound Sources

- [Freesound.org](https://freesound.org/) - Free audio effects
- [Zapsplat](https://www.zapsplat.com/) - Royalty-free sounds
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/) - Quality effects
- Record your own Wii UI sounds!

## Format Requirements

- Format: MP3 (recommended for browser compatibility)
- Alternative: WAV, OGG
- Duration: 100-300ms for best UX
- Volume: -6dB to -12dB to avoid harshness

## Usage

The WiiButton component will automatically look for:
- `/sounds/wii-hover.mp3` on hover
- `/sounds/wii-click.mp3` on click

You can also provide custom paths via props:
```tsx
<WiiButton
  hoverSound="/audio/custom-hover.mp3"
  clickSound="/audio/custom-click.mp3"
>
  Button
</WiiButton>
```
