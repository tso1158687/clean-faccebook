# Clean Facebook

## Introduction
Clean Facebook is a Chrome extension designed to remove `div` elements with specific `role` attributes from Facebook pages. These roles include `navigation`, `complementary`, `region`, and `banner`.

## Features
- Automatically removes `div` elements with the following `role` attributes from Facebook pages:
  - `navigation`
  - `complementary`
  - `region`
  - `banner`

## Installation

1. Download and extract the extension files.
2. Open Chrome and go to the [Extensions page](chrome://extensions/).
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the extracted extension folder.

## Usage
1. After installing the extension, visit [Facebook](https://www.facebook.com).
2. The extension will automatically run and remove `div` elements with `role="navigation"`, `role="complementary"`, `role="region"`, and `role="banner"` attributes.

## Development

### Prerequisites
- Node.js
- npm

### Setup
1. Clone this repository:
    ```bash
    git clone <repository-url>
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Build
1. Build the extension:
    ```bash
    npm run build
    ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the [MIT](LICENSE) License.
