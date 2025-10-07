package com.tns.collegeservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollegeService {

    @Autowired
    private CollegeRepository collegeRepository;

    public List<College> getAllColleges() {
        return collegeRepository.findAll();
    }

    public College getCollegeById(Long id) {
        return collegeRepository.findById(id).orElse(null);
    }

    public College addCollege(College college) {
        return collegeRepository.save(college);
    }

    public College updateCollege(Long id, College collegeDetails) {
        College college = collegeRepository.findById(id).orElse(null);
        if (college != null) {
            college.setName(collegeDetails.getName());
            college.setAddress(collegeDetails.getAddress());
            college.setCity(collegeDetails.getCity());
            college.setState(collegeDetails.getState());
            return collegeRepository.save(college);
        }
        return null;
    }

    public void deleteCollege(Long id) {
        collegeRepository.deleteById(id);
    }
}
