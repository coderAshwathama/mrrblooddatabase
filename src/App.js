import React, { useState, useMemo } from "react";
import { donorData } from "./data/donors";
import SearchFilter from "./components/SearchFilter";
import DonorList from "./components/DonorList";
import AddDonorModal from "./components/AddDonorModal";
import AddDonorForm from "./components/AddDonorForm";
import ErrorModal from "./components/ErrorModal";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    province: "",
    district: "",
    bloodGroup: "",
    searchName: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [additionalDonors, setAdditionalDonors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorModal, setErrorModal] = useState({ isOpen: false, error: null });

  // Get unique provinces and districts
  const provinces = useMemo(() => {
    const allDonors = [...donorData, ...additionalDonors];
    return [...new Set(allDonors.map((d) => d.province))].sort();
  }, [additionalDonors]);

  const districts = useMemo(() => {
    const allDonors = [...donorData, ...additionalDonors];
    if (filters.province) {
      return [
        ...new Set(
          allDonors
            .filter((d) => d.province === filters.province)
            .map((d) => d.district),
        ),
      ].sort();
    }
    return [...new Set(allDonors.map((d) => d.district))].sort();
  }, [filters.province, additionalDonors]);

  const bloodGroups = useMemo(() => {
    const allDonors = [...donorData, ...additionalDonors];
    return [...new Set(allDonors.map((d) => d.bloodGroup))].sort();
  }, [additionalDonors]);

  // Filter donors based on search criteria
  const filteredDonors = useMemo(() => {
    const allDonors = [...donorData, ...additionalDonors];
    return allDonors.filter((donor) => {
      const matchProvince =
        !filters.province || donor.province === filters.province;
      const matchDistrict =
        !filters.district || donor.district === filters.district;
      const matchBloodGroup =
        !filters.bloodGroup || donor.bloodGroup === filters.bloodGroup;
      const matchName =
        !filters.searchName ||
        donor.fullName.toLowerCase().includes(filters.searchName.toLowerCase());

      return matchProvince && matchDistrict && matchBloodGroup && matchName;
    });
  }, [filters, additionalDonors]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      province: "",
      district: "",
      bloodGroup: "",
      searchName: "",
    });
  };

  const handleAddDonor = (formData) => {
    const allDonors = [...donorData, ...additionalDonors];

    // Check for exact match (name + phone)
    const exactMatch = allDonors.find(
      (donor) =>
        donor.fullName.toLowerCase() === formData.fullName.toLowerCase() &&
        (donor.phone === formData.phone ||
          (formData.phoneSecondary &&
            donor.phone === formData.phoneSecondary) ||
          (donor.phoneSecondary && donor.phoneSecondary === formData.phone) ||
          (donor.phoneSecondary &&
            formData.phoneSecondary &&
            donor.phoneSecondary === formData.phoneSecondary)),
    );

    if (exactMatch) {
      setErrorModal({
        isOpen: true,
        error: {
          type: "duplicate-exact",
          message:
            "You already have this entry in our database. Please check if you have already registered.",
          details: {
            matchedDonor: exactMatch,
            suggestion:
              "If this is not you, please use a different phone number or contact support.",
          },
        },
      });
      return;
    }

    // Check for phone number match only
    const phoneMatch = allDonors.find(
      (donor) =>
        donor.phone === formData.phone ||
        (formData.phoneSecondary && donor.phone === formData.phoneSecondary) ||
        (donor.phoneSecondary && donor.phoneSecondary === formData.phone) ||
        (donor.phoneSecondary &&
          formData.phoneSecondary &&
          donor.phoneSecondary === formData.phoneSecondary),
    );

    if (phoneMatch) {
      setErrorModal({
        isOpen: true,
        error: {
          type: "duplicate-phone",
          message: `This phone number is already associated with ${phoneMatch.fullName}. Please verify your phone number or use a different one.`,
          details: {
            matchedDonor: phoneMatch,
            suggestion:
              "If this is your phone number, you may have already registered. If not, please provide a different number.",
          },
        },
      });
      return;
    }

    // If no duplicates found, add the donor
    const newDonor = {
      id:
        Math.max(
          ...donorData.map((d) => d.id),
          ...additionalDonors.map((d) => d.id),
          0,
        ) + 1,
      ...formData,
    };
    setAdditionalDonors([...additionalDonors, newDonor]);
    setIsModalOpen(false);
    setSuccessMessage(
      `✓ Thank you! Your details have been added to the database.`,
    );
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>🩸 MRR Blood Database</h1>
        <p>Find blood donors by province, district and blood group</p>
      </header>

      <main className="main-content">
        <div className="main-header">
          <div>
            <h2>Search Blood Donors</h2>
            <p className="total-donors">
              Total Donors: {[...donorData, ...additionalDonors].length}
            </p>
          </div>
          <button
            className="btn-add-donor"
            onClick={() => setIsModalOpen(true)}
            title="Add your details to the database"
          >
            + Add Your Details
          </button>
        </div>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <SearchFilter
          filters={filters}
          provinces={provinces}
          districts={districts}
          bloodGroups={bloodGroups}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
        />

        <DonorList donors={filteredDonors} />
      </main>

      <footer className="footer">
        <p>
          &copy; 2026 MRR Blood Donor Database. Find life-saving donors near
          you.
        </p>
      </footer>

      <AddDonorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddDonorForm
          provinces={provinces}
          onSubmit={handleAddDonor}
          onCancel={() => setIsModalOpen(false)}
        />
      </AddDonorModal>

      <ErrorModal
        isOpen={errorModal.isOpen}
        error={errorModal.error}
        onClose={() => setErrorModal({ isOpen: false, error: null })}
      />
    </div>
  );
}

export default App;
