<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <meta name="description" content="Gnosys Digital delivers expert-built digital solutions, ERPNext implementations, custom web apps, AI automation, and ready-to-use digital products.">
        <meta name="theme-color" content="#00477b">

        <!-- Canonical URL -->
        <link rel="canonical" href="{{ url()->current() }}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:site_name" content="Gnosys Digital">
        <meta property="og:title" content="{{ config('app.name', 'Gnosys Digital') }}">
        <meta property="og:description" content="Expert-built digital solutions, ERPNext implementations, AI automation, and digital products.">
        <meta property="og:image" content="{{ url('/gnosysLogo.png') }}">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('app.name', 'Gnosys Digital') }}">
        <meta name="twitter:description" content="Expert-built digital solutions, ERPNext implementations, AI automation, and digital products.">
        <meta name="twitter:image" content="{{ url('/gnosysLogo.png') }}">

        <!-- Preconnect to Font Services for faster FCP -->
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link rel="dns-prefetch" href="https://fonts.bunny.net">

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <!-- Schema.org JSON-LD -->
        <script type="application/ld+json">
        {
            "@@context": "https://schema.org",
            "@@type": "Organization",
            "name": "Gnosys Digital",
            "url": "{{ url('/') }}",
            "logo": "{{ url('/gnosysLogo.png') }}",
            "description": "Expert-built digital solutions, ERPNext implementations, AI automation, and ready-to-use digital products.",
            "contactPoint": {
                "@@type": "ContactPoint",
                "telephone": "+1-647-947-9546",
                "contactType": "customer support",
                "email": "connect@@gnosysdigital.com"
            }
        }
        </script>

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <title inertia>{{ config('app.name', 'Gnosys Digital') }}</title>
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
