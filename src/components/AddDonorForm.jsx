import React, { useState } from "react";

function AddDonorForm({ provinces, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    fullName: "",
    district: "",
    province: "",
    address: "",
    phone: "",
    phoneSecondary: "",
    bloodGroup: "",
    birthYear: new Date().getFullYear(),
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bloodGroups = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

  const districts = {
    Koshi: ["Bhojpur", "Dhankuta", "Ilam", "Morang", "Sunsari", "Terhathum"],
    Bagmati: [
      "Bhaktapur",
      "Chitwan",
      "Kathmandu",
      "Lalitpur",
      "Nuwakot",
      "Ramechhap",
      "Sindhuli",
    ],
    Madhesh: [
      "Bara",
      "Dhanusa",
      "Mahottari",
      "Parsa",
      "Rautahat",
      "Saptari",
      "Siraha",
    ],
    Gandaki: [
      "Gorkha",
      "Kaski",
      "Lamjung",
      "Manang",
      "Mustang",
      "Myagdi",
      "Parbat",
      "Syangja",
      "Tanahu",
    ],
    Lumbini: [
      "Argakhanchi",
      "Gulmi",
      "Kapilvastu",
      "Nuwakot",
      "Palpa",
      "Pyuthan",
      "Rupandehi",
    ],
    Karnali: [
      "Dailekh",
      "Dolpa",
      "Humla",
      "Jajarkot",
      "Jumla",
      "Kalikot",
      "Salyan",
      "Surkhet",
      "Udayapur",
    ],
    "Sud.Pashchim": [
      "Achham",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Dadeldhura",
      "Doti",
      "Kanchanpur",
      "Kailali",
    ],
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.province) {
      newErrors.province = "Province is required";
    }

    if (!formData.district) {
      newErrors.district = "District is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^9\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone must be a valid 10-digit number starting with 9";
    }

    if (formData.phoneSecondary.trim()) {
      if (!/^9\d{9}$/.test(formData.phoneSecondary.replace(/\s/g, ""))) {
        newErrors.phoneSecondary =
          "Secondary phone must be a valid 10-digit number starting with 9";
      }
    }

    if (!formData.bloodGroup) {
      newErrors.bloodGroup = "Blood group is required";
    }

    if (!formData.birthYear) {
      newErrors.birthYear = "Birth year is required";
    } else {
      const year = parseInt(formData.birthYear);
      const currentYear = new Date().getFullYear();
      const minBirthYear = currentYear - 18;
      if (year < 1950) {
        newErrors.birthYear = "Birth year must be after 1950";
      } else if (year > minBirthYear) {
        newErrors.birthYear =
          "You must be at least 18 years old to donate blood";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form className="add-donor-form" onSubmit={handleSubmit}>
      <h2>Add Your Details to Blood Database</h2>
      <p className="form-subtitle">
        Help save lives by sharing your blood donation information
      </p>

      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={errors.fullName ? "input-error" : ""}
        />
        {errors.fullName && (
          <span className="error-message">{errors.fullName}</span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="province">Province *</label>
          <select
            id="province"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className={errors.province ? "input-error" : ""}
          >
            <option value="">Select Province</option>
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.province && (
            <span className="error-message">{errors.province}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="district">District *</label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className={errors.district ? "input-error" : ""}
            disabled={!formData.province}
          >
            <option value="">Select District</option>
            {formData.province &&
              districts[formData.province] &&
              districts[formData.province].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
          {errors.district && (
            <span className="error-message">{errors.district}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Address *</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your complete address"
          className={errors.address ? "input-error" : ""}
        />
        {errors.address && (
          <span className="error-message">{errors.address}</span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="98XXXXXXXXX"
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phoneSecondary">
            Secondary Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phoneSecondary"
            name="phoneSecondary"
            value={formData.phoneSecondary}
            onChange={handleChange}
            placeholder="98XXXXXXXXX (optional)"
            className={errors.phoneSecondary ? "input-error" : ""}
          />
          {errors.phoneSecondary && (
            <span className="error-message">{errors.phoneSecondary}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group *</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className={errors.bloodGroup ? "input-error" : ""}
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
          {errors.bloodGroup && (
            <span className="error-message">{errors.bloodGroup}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="birthYear">Birth Year *</label>
        <input
          type="number"
          id="birthYear"
          name="birthYear"
          value={formData.birthYear}
          onChange={handleChange}
          min="1950"
          max={new Date().getFullYear()}
          className={errors.birthYear ? "input-error" : ""}
        />
        {errors.birthYear && (
          <span className="error-message">{errors.birthYear}</span>
        )}
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Add to Database"}
        </button>
        <button
          type="button"
          className="btn btn-cancel"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </button>
      </div>

      <p className="form-note">✓ All fields marked with * are required</p>
    </form>
  );
}

export default AddDonorForm;
