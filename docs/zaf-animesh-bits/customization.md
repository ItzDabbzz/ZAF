# Customization

ZAF Animesh Bits v2 offers extensive customization options including textures, materials, colors, and PBR (Physically Based Rendering) support.

## Texture System Overview

The system uses two primary command channels for customization:
- **Channel 551551**: Primary texture and PBR commands  
- **Channel -551551**: Alternative channel

:::warning Important
Texture commands no longer work on the `/55` channel. Use `/551551` for all texture operations.
:::

## Basic Texture Application

### Texture Slots
Available texture slots for customization:

#### Main Slots
- **cock**: Main shaft texture
- **balls**: Ball texture
- **ctat**: Cock tattoo overlay
- **btat**: Balls tattoo overlay
- **fur**: Fur texture
- **pouch**: Pouch texture
- **condom**: Condom texture
- **piercing**: Piercing textures

#### Special Slots
- **ccel**: Cock cell-shading
- **fcel**: Fur cell-shading
- **bcel**: Balls cell-shading

### Quick Texture Swap
```bash
/551551 pbr,SLOT,0,TEXTURE_UUID
```

**Examples:**
```bash
/551551 pbr,cock,0,550e8400-e29b-41d4-a716-446655440000
/551551 pbr,balls,0,550e8400-e29b-41d4-a716-446655440001
/551551 pbr,ctat,0,550e8400-e29b-41d4-a716-446655440002
```

## Advanced PBR Texture System

### Complete PBR Command
```bash
/551551 pbr,SLOT,PBR_MODE,TEXTURE,REPEATS,OFFSETS,ROTATION,COLOR,ALPHA,ALPHA_MODE,ALPHA_MASK,DOUBLE_SIDED,NORMAL_UUID,NORMAL_REPEATS,NORMAL_OFFSETS,NORMAL_ROTATION,METALLIC_UUID,METALLIC_REPEATS,METALLIC_OFFSETS,METALLIC_ROTATION,METALLIC_VALUE,ROUGHNESS_VALUE,EMISSIVE_UUID,EMISSIVE_REPEATS,EMISSIVE_OFFSETS,EMISSIVE_ROTATION,EMISSIVE_TINT,GLOW,SPEC_TEXTURE,SPEC_REPEATS,SPEC_OFFSETS,SPEC_ROTATION,SPEC_COLOR,GLOSS,ENVIRONMENT,FULLBRIGHT,SKIP_NORMALS
```

### Standard PBR Setup
```bash
/551551 pbr,SLOT,0,TEXTURE,<1,1,0>,<0,0,0>,0,<1,1,1>,1,0,100,0,NORMAL_TEX,<1,1,0>,<0,0,0>,0,METALLIC_TEX,<1,1,0>,<0,0,0>,0,0.1,0.8,EMISSIVE_TEX,<1,1,0>,<0,0,0>,0,<0,0,0>,0,SPEC_TEX,<1,1,0>,<0,0,0>,0,<0,0,0>,166,0,0
```

#### Parameter Explanations:
- **PBR_MODE**: 0 for PBR off, 1 for PBR on
- **REPEATS**: `<X,Y,0>` texture repeat values
- **OFFSETS**: `<X,Y,0>` texture offset values  
- **ROTATION**: Rotation in radians (use `DEG_TO_RAD` for conversion)
- **COLOR**: `<R,G,B>` tint color (0.0-1.0 values)
- **ALPHA**: Transparency (0.0-1.0)
- **ALPHA_MODE**: 0=none, 1=blend, 2=mask
- **ALPHA_MASK**: Cutoff value for mask mode
- **METALLIC_VALUE**: Metallic property (0.0-1.0)
- **ROUGHNESS_VALUE**: Surface roughness (0.0-1.0)
- **EMISSIVE_TINT**: `<R,G,B>` emissive color
- **GLOW**: Glow intensity (0.0-1.0)
- **GLOSS**: Specular gloss (1-255)
- **ENVIRONMENT**: Environment intensity (1-255)
- **FULLBRIGHT**: 0=off, 1=on
- **SKIP_NORMALS**: 0=use normals, 1=skip normals (legacy effect)

## Color Customization

### Basic Coloring
```bash
/551551 pbr,SLOT,-,-,-,-,-,COLOR
```

**Examples:**
```bash
/551551 pbr,cock,-,-,-,-,-,<0.44621,1.00000,0.51575>   # Green tint
/551551 pbr,balls,-,-,-,-,-,<1.00000,0.44621,0.51575>  # Pink tint
```

### Specialized Color Slots
For parts that share texture data but need individual coloring:

```bash
/551551 SLOT,COLOR,GLOW,SPEC_COLOR,GLOSS,ENVIRONMENT,EMISSIVE,METALLIC,ROUGHNESS,FULLBRIGHT
```

#### Available Specialized Slots:
- **barbcol**: Barb coloring
- **rimcol**: Rim coloring
- **cocktipcol**: Cock tip coloring
- **pierccol**: Piercing coloring
- **collardat**: Collar data
- **celba**: Cell-shade barbs color

**Example:**
```bash
/551551 rimcol,<1,0,1>,0,<1,1,1>,255,0,0.1,0.2,0.3,0
```

## Gloss and Shinyness

### Complete Gloss Control
```bash
/551551 setgloss,SHAFT_COLOR,BALLS_COLOR,CUM_SHAFT_COLOR,CUM_BALLS_COLOR,GLOSS_SHAFT,GLOSS_BALLS,GLOSS_CUM_SHAFT,GLOSS_CUM_BALLS,ENVIRO_SHAFT,ENVIRO_BALLS,ENVIRO_CUM_SHAFT,ENVIRO_CUM_BALLS
```

#### Default Settings:
```bash
/551551 setgloss,<0.25,0.25,0.25>,<0.25,0.25,0.25>,<0.6,0.6,0.6>,<1,1,1>,166,166,255,255,0,0,0,0
```

### Shinyness Only
```bash
# Shaft and balls
/551551 setgloss,<0.15,0.15,0.15>,<1,1,1>,<1,1,1>,<1,1,1>

# Only shaft
/551551 setgloss,<0.15,0.15,0.15>

# Only balls (use dash to skip shaft)
/551551 setgloss,-,<1,1,1>
```

### Gloss Values Only
```bash
/551551 setgloss,-,-,-,-,GLOSS_SHAFT,GLOSS_BALLS,GLOSS_CUM_SHAFT,GLOSS_CUM_BALLS
```

**Default gloss values:**
```bash
/551551 setgloss,-,-,-,-,166,166,255,255
```

### Environment Gloss Only
```bash
/551551 setgloss,-,-,-,-,-,-,-,-,ENVIRO_SHAFT,ENVIRO_BALLS,ENVIRO_CUM_SHAFT,ENVIRO_CUM_BALLS
```

## Cum and Wetness Texturing

### Layer Transparency Control
```bash
/551551 wetlayer,0.99    # Wet layer transparency (fixes tattoo conflicts)
/551551 cumlayer,0.99    # Cum layer transparency
```

### Advanced Cum/Wetness Texturing
```bash
/551551 leg,TEXTURE_SLOT,TEXTURE_UUID,REPEATS,OFFSETS,ROTATION,ALPHA_MODE,ALPHA_MASKING,NORMAL_UUID,NORMAL_REPEATS,NORMAL_OFFSETS,NORMAL_ROTATION,SPECULAR_UUID,SPEC_REPEATS,SPEC_OFFSETS,SPEC_ROTATION
```

#### Texture Slots for Cum/Wetness:
- **cum**: Cum texture
- **cumb**: Cum texture variant
- **wet**: Wetness texture
- **wetb**: Wetness texture variant
- **cumpouch**: Cum on pouch
- **wetpouch**: Wetness on pouch
- **cumcondom**: Cum in condom
- **cumgoo**: Cum strands

#### Example - Cum Texture:
```bash
/551551 leg,cum,TEXTURE_UUID,<1,1,0>,<0,0,0>,0,1,75,NORMAL_UUID,<1,1,0>,<0,0,0>,0,SPEC_UUID,<1,1,0>,<0,0,0>,0
```

#### Condom Transparency Fix:
```bash
# Set condom to masking mode
/551551 leg,cumcondom,-,-,-,-,2

# Restore to alpha blend
/551551 leg,cumcondom,-,-,-,-,1
```

## Cell-Shading Effects

### Enable/Disable Cell-Shading
```bash
/551551 cel,COCK,BALLS,FUR,BARBS
```

- **0**: Disable cell-shading
- **1**: Enable cell-shading

**Examples:**
```bash
/551551 cel,1,1,1,1     # Enable all cell-shading
/551551 cel,1,0,0,0     # Only cock cell-shading
/551551 cel,0,0,0,0     # Disable all cell-shading
```

## Animated Textures (GIF Support)

### Texture Animation Command
```bash
/506901 SLOT,LINKS,MODES,FACES,SIZE_X,SIZE_Y,FRAME_START,FRAME_END,FRAMERATE
```

#### Animation Slots (1-5 available):
- **texanim1** through **texanim5**

#### Target Links:
- **26**: Balls tattoo
- **8**: Cock tattoo  
- **33**: Cock barbs tattoo

#### Animation Modes:
- **1**: ANIM_ON
- **2**: LOOP
- **4**: REVERSE
- **8**: PING_PONG
- **16**: SMOOTH
- **32**: ROTATE (don't use with SCALE)
- **64**: SCALE (don't use with ROTATE)

#### Example - Animated Balls Tattoo:
```bash
/506901 texanim1,26,3,-1,3,3,0,9,12
```
*Targets balls tattoo (26), uses ANIM_ON+LOOP (1+2=3), all faces (-1), 3x3 grid, frames 0-9, 12 FPS*

#### Clear Animation:
```bash
/506901 texanim1,-1
```

#### Adjust Framerate Only:
```bash
/506901 texanim1,-,-,-,-,-,-,-,24  # Set to 24 FPS
```

## Piercings

### Basic Piercing Control
```bash
/55 piercings,TIP_RING,TIP_PIERCINGS,MID_PIERCINGS,COCK_RING,SHEATH_PIERCED,BALLS_PIERCING
```

- **0**: Disable
- **1**: Enable  
- **2**: Alternative style (CockRing and BallsPiercing only)

**Examples:**
```bash
/55 piercings,1,1,1,1,1,1     # Enable all piercings
/55 piercings,0,1,1,0,1,0     # Selective piercings
/55 piercings,1,1,1,2,1,2     # With alternative styles
```

## Erection State Control

### Fast Erection Transitions
```bash
/55 pace,1      # Nearly instant erection state changes
/55 pace,0      # Normal transition speed (default)
```

## Texture Kits Compatibility

### UV Mapping Groups:
- **FelineCanine/Horse/Cervine/HybridAnthro/DragonAlt/Fealine**: Share same balls UVs
- **Dragon/Obsidian Dragon**: Share same orbs UVs

When creating custom textures, ensure compatibility with your attachment variant.

## Tips for Customization

1. **Use Dashes**: Skip parameters you don't want to change with `-`
2. **Test Gradually**: Make small changes and test before major modifications
3. **Backup Settings**: Note down working configurations before experimenting
4. **UV Awareness**: Ensure textures match your variant's UV mapping
5. **Performance**: Complex PBR setups may impact performance on older hardware
6. **Normal Maps**: Use `SKIP_NORMALS,1` for legacy appearance
7. **Alpha Issues**: Use masking mode (2) if textures conflict with alpha blending

## Troubleshooting Customization

### Common Issues:
- **Textures not applying**: Check you're using `/551551` not `/55`
- **Transparency conflicts**: Adjust wet/cum layer transparency
- **Missing normals**: Verify normal map UUIDs or enable `SKIP_NORMALS`
- **Color not showing**: Ensure alpha values aren't set to 0
- **Animation not working**: Check GIF frame count and grid size match

### Reset Commands:
```bash
/551551 setgloss,<0.25,0.25,0.25>,<0.25,0.25,0.25>,<0.6,0.6,0.6>,<1,1,1>,166,166,255,255,0,0,0,0  # Reset gloss
/551551 cel,0,0,0,0      # Disable all cell-shading
/506901 texanim1,-1      # Clear texture animation
```
