# MRR Blood Donor Database

A clean and minimal React web application for searching blood donors in Nepal by province, district, and blood group.

## Features

- 🔍 **Advanced Search**: Filter donors by province, district, blood group, and name
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **MRR Red Branding**: Clean minimal UI with professional red theme
- ⚡ **Fast Performance**: Instant search results with optimized filtering
- 📊 **Rich Information**: Display donor details including phone number and address

## Project Structure

```
mrrblood/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchFilter.jsx      # Search and filter UI
│   │   ├── DonorCard.jsx         # Individual donor card
│   │   └── DonorList.jsx         # List container for donors
│   ├── data/
│   │   └── donors.js            # Donor database
│   ├── App.js                    # Main application component
│   ├── App.css                   # Application styles
│   └── index.js                  # React entry point
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm start
   ```

3. **Open in browser**
   The app will automatically open at `http://localhost:3000`

## Usage

1. **Search by Province**: Select a province from the dropdown to filter donors
2. **Search by District**: Choose a specific district (optional)
3. **Filter by Blood Group**: Select a blood group (O+, A+, B+, AB+, O-, A-, B-, AB-)
4. **Search by Name**: Type a donor's name to search
5. **Reset**: Click "Reset Filters" to clear all selections

## Available Scripts

### Development

```bash
npm start
```

Runs the app in development mode.

### Build

```bash
npm build
```

Builds the app for production to the `build` folder.

### Test

```bash
npm test
```

Launches the test runner.

## Technology Stack

- **React 18**: Modern UI library
- **CSS3**: Responsive styling with custom properties
- **JavaScript ES6+**: Modern JavaScript features

## Color Scheme

- **Primary Red**: `#DC143C` - MRR brand color
- **Dark Red**: `#B22333` - Hover states
- **Light Gray**: `#F8F9FA` - Background
- **Dark Gray**: `#2C3E50` - Text
- **Border**: `#E0E0E0` - Borders and dividers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Included

- ✅ Province/District filtering
- ✅ Blood group filtering
- ✅ Name search functionality
- ✅ Responsive grid layout
- ✅ Contact phone numbers (clickable)
- ✅ Donor address display
- ✅ Birth year information
- ✅ Real-time search results
- ✅ Empty state handling

## Data Structure

Each donor record contains:

```javascript
{
  id: number,
  fullName: string,
  district: string,
  province: string,
  address: string,
  phone: string,
  bloodGroup: string,
  birthYear: number
}
```

## Future Enhancements

- [ ] Add donor availability status
- [ ] Implement location-based nearby donor search
- [ ] Add donor registration form
- [ ] Integrate with backend API
- [ ] Add favorite/bookmark functionality
- [ ] Email notifications
- [ ] Dark mode support

## License

© 2024 MRR Blood Donor Database. All rights reserved.

## Support

For issues or feature requests, please contact the development team.

---

**Made with ❤️ for saving lives**
