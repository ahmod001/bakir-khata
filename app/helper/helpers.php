<?php

use Illuminate\Support\Str;

if (!function_exists('generateSlug')) {
    /**
     * Generate a unique slug for a model.
     *
     * @param string $modelClass The model class, e.g., App\Models\Post::class
     * @param string $value The string to base the slug on
     * @param string $slugColumn The column name for the slug (default: 'slug')
     * @return string
     */
    function generateSlug(string $modelClass, string $value, string $slugColumn = 'slug'): string
    {
        $baseSlug = Str::slug($value);
        $slug = $baseSlug;
        $counter = 1;

        while ($modelClass::where($slugColumn, $slug)->exists()) {
            $slug = $baseSlug . '-' . $counter++;
        }

        return $slug;
    }
}
