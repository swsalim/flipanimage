'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import type { Area } from 'react-easy-crop';

import { create } from 'zustand';

import { socialMediaPlatforms } from '@/config/platforms';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

type ResizeImageStore = {
  isImageSelected: boolean;
  setImageSelected: (isImageSelected: boolean) => void;
};

export const useResizeImageStore = create<ResizeImageStore>((set) => ({
  isImageSelected: false,
  setImageSelected: (isImageSelected) => set({ isImageSelected }),
}));

// Memoize dimension presets since they never change
const DIMENSION_PRESETS = [
  { label: 'Facebook Profile Picture', width: 320, height: 320 },
  { label: 'Instagram Profile Picture', width: 320, height: 320 },
  { label: 'Twitter Profile Picture', width: 400, height: 400 },
  { label: 'TikTok Profile Picture', width: 400, height: 400 },
  { label: 'LinkedIn Profile Picture', width: 400, height: 400 },
  { label: 'YouTube Channel Picture', width: 800, height: 800 },
  { label: 'Discord Profile Picture', width: 128, height: 128 },
  { label: 'Custom Size', width: 0, height: 0 },
] as const;

interface DimensionPreset {
  label: string;
  width: number;
  height: number;
}

const ImageCropper = ({ platform }: { platform?: string | null }) => {
  const setImageSelected = useResizeImageStore((state) => state.setImageSelected);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<DimensionPreset | null>(
    !platform ? DIMENSION_PRESETS[0] : null,
  );
  const [customWidth, setCustomWidth] = useState<number>(500);
  const [customHeight, setCustomHeight] = useState<number>(500);

  const defaultWidth =
    socialMediaPlatforms.find((p) => p.name.toLowerCase() === platform)?.imageWidth || 500;
  const defaultHeight =
    socialMediaPlatforms.find((p) => p.name.toLowerCase() === platform)?.imageHeight || 500;

  // Keep useCallback here because it's used in dropzone config dependency array
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setImageSelected(true);
    };
    reader.readAsDataURL(file);
  }, []);

  // Keep useMemo for dropzone config as it's used by the dropzone hook
  const dropzoneConfig = useMemo(
    () => ({
      onDrop,
      accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      },
    }),
    [onDrop],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneConfig);

  // Keep useCallback here as it's passed as prop to Cropper component
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Keep useCallback for complex image processing functions
  const resizeImage = useCallback(
    (canvas: HTMLCanvasElement, targetWidth: number, targetHeight: number) => {
      const resizedCanvas = document.createElement('canvas');
      resizedCanvas.width = targetWidth;
      resizedCanvas.height = targetHeight;
      const ctx = resizedCanvas.getContext('2d');

      if (!ctx) return canvas;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(canvas, 0, 0, targetWidth, targetHeight);
      return resizedCanvas;
    },
    [],
  );

  // Keep useCallback for complex image processing function
  const createCroppedImage = useCallback(async () => {
    if (!croppedAreaPixels || !imageSrc) return;

    const image = new Image();
    image.src = imageSrc;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    await new Promise((resolve) => {
      image.onload = resolve;
    });

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    // ctx.beginPath();
    // ctx.arc(
    //   canvas.width / 2,
    //   canvas.height / 2,
    //   Math.min(canvas.width, canvas.height) / 2,
    //   0,
    //   2 * Math.PI,
    // );
    // ctx.clip();

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
    );

    let finalWidth, finalHeight;

    if (selectedPreset) {
      if (selectedPreset.label === 'Custom Size') {
        finalWidth = customWidth;
        finalHeight = customHeight;
      } else {
        finalWidth = selectedPreset.width;
        finalHeight = selectedPreset.height;
      }
    } else {
      finalWidth = defaultWidth;
      finalHeight = defaultHeight;
    }

    const finalCanvas = resizeImage(canvas, finalWidth, finalHeight);

    finalCanvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cropped-image-${finalWidth}x${finalHeight}.png`;
        a.click();
        URL.revokeObjectURL(url);
      },
      'image/png',
      1.0,
    );
  }, [croppedAreaPixels, imageSrc, selectedPreset, customWidth, customHeight, resizeImage]);

  // Remove useCallback for simple event handlers
  const handlePresetChange = (value: string) => {
    const preset = DIMENSION_PRESETS.find((p) => p.label === value);
    if (preset) setSelectedPreset(preset);
  };

  const handleZoomChange = (value: number[]) => {
    setZoom(Number(value));
  };

  const handleCustomWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomWidth(Number(e.target.value));
  };

  const handleCustomHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomHeight(Number(e.target.value));
  };

  // Keep useMemo for computed string that depends on state
  const dropzoneClassName = useMemo(
    () =>
      cn(
        'mb-4 rounded-lg border border-2 border-dashed p-4 text-center text-violet-500',
        isDragActive ? 'border-violet-500 bg-violet-50 text-violet-700' : 'border-violet-300',
      ),
    [isDragActive],
  );

  // Keep useMemo for array mapping operation
  const presetOptions = useMemo(
    () =>
      DIMENSION_PRESETS.map((preset) => (
        <SelectItem key={preset.label} value={preset.label}>
          {preset.label} {preset.width ? `(${preset.width}x${preset.height}px)` : ''}
        </SelectItem>
      )),
    [],
  );

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div {...getRootProps()} className={dropzoneClassName}>
        <input {...getInputProps()} />
        <p>Drop an image here, or click to select</p>
      </div>

      {imageSrc && (
        <div className="relative mb-4 h-96">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="rect"
            showGrid={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
      )}

      {imageSrc && !platform && (
        <div className="space-y-4">
          <div className="flex flex-col gap-y-2">
            <Label>Dimensions</Label>
            <Select onValueChange={handlePresetChange} defaultValue={DIMENSION_PRESETS[0].label}>
              <SelectTrigger className="w-full max-w-full">
                <SelectValue placeholder="Select a platform" />
              </SelectTrigger>
              <SelectContent>{presetOptions}</SelectContent>
            </Select>
          </div>

          {selectedPreset?.label === 'Custom Size' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-2">
                <Label>Width (px)</Label>
                <Input
                  type="number"
                  value={customWidth}
                  onChange={handleCustomWidthChange}
                  min="1"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Height (px)</Label>
                <Input
                  type="number"
                  value={customHeight}
                  onChange={handleCustomHeightChange}
                  min="1"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-y-2">
            <Label>Zoom</Label>
            <Slider
              defaultValue={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={handleZoomChange}
            />
          </div>

          <Button onClick={createCroppedImage}>Crop and Download</Button>
        </div>
      )}
      {imageSrc && platform && (
        <div className="space-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="mb-1 block text-sm font-medium">Zoom</label>
            <Slider
              defaultValue={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={handleZoomChange}
            />
          </div>
          <Button onClick={createCroppedImage}>Crop and Download</Button>
        </div>
      )}
    </div>
  );
};

export { ImageCropper };
