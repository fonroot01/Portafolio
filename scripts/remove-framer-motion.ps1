$files = Get-ChildItem -Path "." -Recurse -Include "*.tsx","*.ts"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "framer-motion") {
        $content = $content -replace 'import \{.*\} from "framer-motion";?\n?', ''
        $content = $content -replace '<motion\.([a-zA-Z]+)', '<$1'
        $content = $content -replace '</motion\.[a-zA-Z]+>', '</$1>'
        $content = $content -replace 'initial=\{[^}]+\}\s*', ''
        $content = $content -replace 'animate=\{[^}]+\}\s*', ''
        $content = $content -replace 'exit=\{[^}]+\}\s*', ''
        $content = $content -replace 'variants=\{[^}]+\}\s*', ''
        $content = $content -replace 'whileHover=\{[^}]+\}\s*', ''
        $content = $content -replace 'whileTap=\{[^}]+\}\s*', ''
        $content = $content -replace 'transition=\{[^}]+\}\s*', ''
        Set-Content $file.FullName $content
    }
}
