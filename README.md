# cpyrtseek00r
A tool to check on copyright headers in source code files by self defined regular expressions.

## Usage

```
cpyrtseek00r seek00r.conf 
```

### Configuration

```json
{
    includedFiles: '',
    excludedFiles: '',
    basePath: '',
    searchPattern: ''
}
```


## Development

```
npm run build
```

## Using file watch and execution (Linux omly)

```
ls src/*.py | entr -c python src/main.py
```


---

# ADR

## Idea

A tool which parses any given files on a predefined set of regular expressions.

**Configuration**

pattern: string[] - 
includedFiles: string[] - 
excludedFiles: string[] - 

