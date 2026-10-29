// AUTO-GENERATED CLIENT-SIDE SIMULATOR FALLBACK (FOR GITHUB PAGES HOSTING)
const GITHUB_PAGES_FALLBACK_STATE = {"farm_name": "AgriTwin Akıllı Süt Çiftliği Dijital İkizi (Faz 4: Endüstriyel)", "simulation_tick": 0, "simulation_running": true, "current_time": "2026-10-29T13:20:38.915465", "active_scenario": null, "barn_zones": [{"zone_id": "ZONE-A", "name": "Bölüm A (Yüksek Verim Grubu)", "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.8, "heat_stress_category": "NORMAL", "ventilation_fans_active": false, "misting_active": false, "animal_count": 3}, {"zone_id": "ZONE-B", "name": "Bölüm B (Orta Verim Grubu)", "temperature_c": 23.0, "relative_humidity_pct": 60.0, "thi_index": 70.5, "heat_stress_category": "NORMAL", "ventilation_fans_active": false, "misting_active": false, "animal_count": 3}, {"zone_id": "ZONE-TREATMENT", "name": "Revir & İzolasyon Bölmesi", "temperature_c": 21.0, "relative_humidity_pct": 50.0, "thi_index": 67.2, "heat_stress_category": "NORMAL", "ventilation_fans_active": false, "misting_active": false, "animal_count": 0}], "animals": [{"id": "TR-34-101", "name": "Sarıkız", "breed": "Holstein Friesian", "lactation_number": 2, "days_in_milk": 85, "daily_average_yield": 34.5, "current_zone": "ZONE-A", "telemetry": {"activity_index": 40, "rumination_minutes_2h": 25, "body_temperature_c": 38.7, "lying_time_hours": 11.5, "feed_intake_kg": 21.06}, "latest_milking": {"timestamp": "2026-10-29T12:36:38.915686", "yield_kg": 17.2, "conductivity_ms_cm": 5.15, "milking_duration_sec": 380}, "dss": {"mastitis_risk_score": 0.08, "heat_stress_level": "NONE", "estrus_probability": 0.04, "overall_health_status": "HEALTHY", "recommended_action": "NONE", "xai_explanations": []}, "gate_assignment": "BARN_RETURN", "history_yield": [34.3, 35.0, 34.2, 34.2, 34.1], "physiology": {"wood_params": {"a": 22.5, "b": 0.22, "c": 0.0036}, "peak_dim": 61, "peak_yield": 44.63, "body_weight_kg": 640.0, "body_condition_score": 3.25, "dry_matter_intake_kg": 21.06, "net_energy_balance_mcal": -0.64, "enteric_methane_g_day": 421.4, "methane_intensity_g_per_kg_milk": 12.21, "carbon_equivalent_kg_co2e": 11.8}, "lactation_curve": [{"dim": 10, "expected_yield": 36.02}, {"dim": 25, "expected_yield": 41.75}, {"dim": 40, "expected_yield": 43.86}, {"dim": 55, "expected_yield": 44.57}, {"dim": 70, "expected_yield": 44.53}, {"dim": 85, "expected_yield": 44.03}, {"dim": 100, "expected_yield": 43.24}, {"dim": 115, "expected_yield": 42.24}, {"dim": 130, "expected_yield": 41.11}, {"dim": 145, "expected_yield": 39.9}, {"dim": 160, "expected_yield": 38.63}, {"dim": 175, "expected_yield": 37.33}, {"dim": 190, "expected_yield": 36.01}, {"dim": 205, "expected_yield": 34.69}, {"dim": 220, "expected_yield": 33.39}, {"dim": 235, "expected_yield": 32.09}, {"dim": 250, "expected_yield": 30.82}, {"dim": 265, "expected_yield": 29.58}, {"dim": 280, "expected_yield": 28.37}, {"dim": 295, "expected_yield": 27.18}], "vision": {"capture_timestamp": "2026-10-29T13:20:38.915714", "camera_id": "CAM-EXIT-CHUTE-3D", "confidence_score": 0.95, "lameness": {"score": 1.0, "back_curvature_index": 0.08, "head_bob_amplitude_cm": 2.1, "gait_asymmetry_pct": 3.5, "stride_duration_sec": 1.05, "affected_hoof": null, "clinical_interpretation": "Normal Yürüyüş (Skor 1). Sırt çizgisi düz, adım uzunlukları simetrik."}, "bcs": {"score": 3.25, "angle_hooks_to_pins_deg": 155.0, "sacral_cavity_depth_mm": 26.0, "short_rib_fat_coverage_mm": 14.0, "condition_category": "OPTIMAL", "clinical_interpretation": "Optimal Kondisyon (3.00 - 3.25). Sağlıklı U-şekilli kavis, dengeli laktasyon enerji rezervi."}, "spine_curvature_points": [{"x_cm": 0.0, "z_elevation_cm": -0.3}, {"x_cm": 20.0, "z_elevation_cm": -0.3}, {"x_cm": 40.0, "z_elevation_cm": -0.0}, {"x_cm": 60.0, "z_elevation_cm": -0.1}, {"x_cm": 80.0, "z_elevation_cm": 0.3}, {"x_cm": 100.0, "z_elevation_cm": -0.1}, {"x_cm": 120.0, "z_elevation_cm": 0.4}, {"x_cm": 140.0, "z_elevation_cm": -0.3}, {"x_cm": 160.0, "z_elevation_cm": -0.4}], "pelvic_depth_points": [{"transverse_y_cm": -40.0, "depth_mm": 1451.9}, {"transverse_y_cm": -30.0, "depth_mm": 1452.1}, {"transverse_y_cm": -20.0, "depth_mm": 1457.4}, {"transverse_y_cm": -10.0, "depth_mm": 1469.9}, {"transverse_y_cm": 0.0, "depth_mm": 1477.5}, {"transverse_y_cm": 10.0, "depth_mm": 1469.2}, {"transverse_y_cm": 20.0, "depth_mm": 1456.8}, {"transverse_y_cm": 30.0, "depth_mm": 1452.0}, {"transverse_y_cm": 40.0, "depth_mm": 1452.0}]}, "rumen": {"telemetry": {"device_id": "BOLUS-101", "capture_timestamp": "2026-10-29T13:20:38.915799", "rumen_ph": 6.5, "rumen_temperature_c": 39.3, "total_vfa_mmol_l": 103.1, "acetate_to_propionate_ratio": 2.96, "lactic_acid_mmol_l": 0.9, "rumen_contractions_per_min": 2.0, "drinking_bouts_today": 8}, "assessment": {"sara_risk_score": 0.08, "hours_below_ph_5_8": 0.0, "acidosis_stage": "NORMAL", "rumen_motility_status": "NORMAL", "buffer_supplement_needed": false, "clinical_interpretation": "Rumen fermantasyonu sağlıklı (pH 6.50). A:P oranı (2.96) lif parçalayıcı bakteriler için idealdir."}, "hourly_ph_curve": [{"hour": 0, "rumen_ph": 6.64, "is_below_threshold": false}, {"hour": 1, "rumen_ph": 6.66, "is_below_threshold": false}, {"hour": 2, "rumen_ph": 6.65, "is_below_threshold": false}, {"hour": 3, "rumen_ph": 6.7, "is_below_threshold": false}, {"hour": 4, "rumen_ph": 6.7, "is_below_threshold": false}, {"hour": 5, "rumen_ph": 6.64, "is_below_threshold": false}, {"hour": 6, "rumen_ph": 6.6, "is_below_threshold": false}, {"hour": 7, "rumen_ph": 6.44, "is_below_threshold": false}, {"hour": 8, "rumen_ph": 6.35, "is_below_threshold": false}, {"hour": 9, "rumen_ph": 6.36, "is_below_threshold": false}, {"hour": 10, "rumen_ph": 6.35, "is_below_threshold": false}, {"hour": 11, "rumen_ph": 6.45, "is_below_threshold": false}, {"hour": 12, "rumen_ph": 6.59, "is_below_threshold": false}, {"hour": 13, "rumen_ph": 6.65, "is_below_threshold": false}, {"hour": 14, "rumen_ph": 6.67, "is_below_threshold": false}, {"hour": 15, "rumen_ph": 6.66, "is_below_threshold": false}, {"hour": 16, "rumen_ph": 6.51, "is_below_threshold": false}, {"hour": 17, "rumen_ph": 6.47, "is_below_threshold": false}, {"hour": 18, "rumen_ph": 6.32, "is_below_threshold": false}, {"hour": 19, "rumen_ph": 6.25, "is_below_threshold": false}, {"hour": 20, "rumen_ph": 6.35, "is_below_threshold": false}, {"hour": 21, "rumen_ph": 6.42, "is_below_threshold": false}, {"hour": 22, "rumen_ph": 6.59, "is_below_threshold": false}, {"hour": 23, "rumen_ph": 6.6, "is_below_threshold": false}]}, "milking_twin": {"robot_id": "VMS-ROBOT-01", "capture_timestamp": "2026-10-29T13:20:38.915912", "animal_id": "TR-34-101", "total_yield_kg": 17.37, "accepted_to_tank_kg": 17.37, "diverted_waste_kg": 0.0, "quarters": {"RF": {"quarter_id": "RF", "quarter_name_tr": "Sağ Ön (Right Front)", "yield_kg": 3.73, "conductivity_ms_cm": 4.94, "somatic_cell_count": 61280, "blood_in_milk_ppm": 4.4, "peak_flow_rate_kg_min": 2.46, "hyperkeratosis_score": 1.2, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Ön (Right Front) sağlıklı. Hücre sayısı 61,280 hücre/mL, süt ana tanka akıyor."}, "RR": {"quarter_id": "RR", "quarter_name_tr": "Sağ Arka (Right Rear)", "yield_kg": 4.79, "conductivity_ms_cm": 5.18, "somatic_cell_count": 83141, "blood_in_milk_ppm": 3.5, "peak_flow_rate_kg_min": 2.34, "hyperkeratosis_score": 1.2, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Arka (Right Rear) sağlıklı. Hücre sayısı 83,141 hücre/mL, süt ana tanka akıyor."}, "LF": {"quarter_id": "LF", "quarter_name_tr": "Sol Ön (Left Front)", "yield_kg": 3.7, "conductivity_ms_cm": 5.02, "somatic_cell_count": 63572, "blood_in_milk_ppm": 5.3, "peak_flow_rate_kg_min": 2.37, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Ön (Left Front) sağlıklı. Hücre sayısı 63,572 hücre/mL, süt ana tanka akıyor."}, "LR": {"quarter_id": "LR", "quarter_name_tr": "Sol Arka (Left Rear)", "yield_kg": 5.15, "conductivity_ms_cm": 4.97, "somatic_cell_count": 72249, "blood_in_milk_ppm": 3.7, "peak_flow_rate_kg_min": 2.38, "hyperkeratosis_score": 1.4, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Arka (Left Rear) sağlıklı. Hücre sayısı 72,249 hücre/mL, süt ana tanka akıyor."}}, "weighted_scc": 71048, "is_any_quarter_diverted": false, "teat_cup_disinfection": "Otomatik Başlık İçi Buhar Sterilizasyonu (95°C, 12 sn)", "post_dip_formula": "Standart İyotlu Bariyer Polimer Sprey", "robot_recommendation": "Tüm 4 meme lobu sağlıklı. 4 lobun sütü de doğrudan birinci sınıf ana süt tankına yönlendirildi."}, "calving": null, "pedigree": {"cow_id": "TR-34-101", "cow_name": "Sarıkız", "sire_id": "US-BULL-MOGUL", "sire_name": "Mountfield SSI Mogul", "dam_id": "TR-06-DAM-4401", "maternal_grand_sire_id": "US-BULL-SUPER", "maternal_grand_sire_name": "Seagull-Bay Supersire", "individual_inbreeding_coeff_f_pct": 5.4, "gebv": {"net_merit_dollars": 720.0, "tpi_score": 2640, "milk_yield_gebv_kg": 560.0, "fat_gebv_kg": 38.0, "fat_gebv_pct": 0.12, "protein_gebv_kg": 28.0, "protein_gebv_pct": 0.06, "somatic_cell_score_gebv": 2.85, "productive_life_months": 3.4, "daughter_pregnancy_rate_pct": 1.1, "sire_calving_ease_pct": 2.1, "udder_composite_udc": 1.75, "feet_leg_composite_flc": 1.4}, "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}, "breeding_category": "COMMERCIAL_DAIRY"}}, {"id": "TR-34-102", "name": "Benekli", "breed": "Holstein Friesian", "lactation_number": 3, "days_in_milk": 120, "daily_average_yield": 38.0, "current_zone": "ZONE-A", "telemetry": {"activity_index": 38, "rumination_minutes_2h": 26, "body_temperature_c": 38.4, "lying_time_hours": 11.5, "feed_intake_kg": 22.94}, "latest_milking": {"timestamp": "2026-10-29T13:01:38.916094", "yield_kg": 19.0, "conductivity_ms_cm": 5.15, "milking_duration_sec": 380}, "dss": {"mastitis_risk_score": 0.08, "heat_stress_level": "NONE", "estrus_probability": 0.04, "overall_health_status": "HEALTHY", "recommended_action": "NONE", "xai_explanations": []}, "gate_assignment": "BARN_RETURN", "history_yield": [38.2, 38.5, 37.8, 37.7, 38.4], "physiology": {"wood_params": {"a": 24.2, "b": 0.24, "c": 0.0039}, "peak_dim": 62, "peak_yield": 51.17, "body_weight_kg": 660.0, "body_condition_score": 3.25, "dry_matter_intake_kg": 22.94, "net_energy_balance_mcal": 0.08, "enteric_methane_g_day": 459.0, "methane_intensity_g_per_kg_milk": 12.08, "carbon_equivalent_kg_co2e": 12.85}, "lactation_curve": [{"dim": 10, "expected_yield": 40.45}, {"dim": 25, "expected_yield": 47.53}, {"dim": 40, "expected_yield": 50.18}, {"dim": 55, "expected_yield": 51.09}, {"dim": 70, "expected_yield": 51.06}, {"dim": 85, "expected_yield": 50.46}, {"dim": 100, "expected_yield": 49.48}, {"dim": 115, "expected_yield": 48.26}, {"dim": 130, "expected_yield": 46.88}, {"dim": 145, "expected_yield": 45.39}, {"dim": 160, "expected_yield": 43.83}, {"dim": 175, "expected_yield": 42.24}, {"dim": 190, "expected_yield": 40.64}, {"dim": 205, "expected_yield": 39.03}, {"dim": 220, "expected_yield": 37.44}, {"dim": 235, "expected_yield": 35.88}, {"dim": 250, "expected_yield": 34.35}, {"dim": 265, "expected_yield": 32.85}, {"dim": 280, "expected_yield": 31.4}, {"dim": 295, "expected_yield": 29.99}], "vision": {"capture_timestamp": "2026-10-29T13:20:38.916113", "camera_id": "CAM-EXIT-CHUTE-3D", "confidence_score": 0.95, "lameness": {"score": 1.0, "back_curvature_index": 0.08, "head_bob_amplitude_cm": 2.1, "gait_asymmetry_pct": 3.5, "stride_duration_sec": 1.05, "affected_hoof": null, "clinical_interpretation": "Normal Yürüyüş (Skor 1). Sırt çizgisi düz, adım uzunlukları simetrik."}, "bcs": {"score": 3.25, "angle_hooks_to_pins_deg": 155.0, "sacral_cavity_depth_mm": 26.0, "short_rib_fat_coverage_mm": 14.0, "condition_category": "OPTIMAL", "clinical_interpretation": "Optimal Kondisyon (3.00 - 3.25). Sağlıklı U-şekilli kavis, dengeli laktasyon enerji rezervi."}, "spine_curvature_points": [{"x_cm": 0.0, "z_elevation_cm": -0.3}, {"x_cm": 20.0, "z_elevation_cm": 0.1}, {"x_cm": 40.0, "z_elevation_cm": 0.1}, {"x_cm": 60.0, "z_elevation_cm": 0.4}, {"x_cm": 80.0, "z_elevation_cm": -0.3}, {"x_cm": 100.0, "z_elevation_cm": -0.0}, {"x_cm": 120.0, "z_elevation_cm": 0.1}, {"x_cm": 140.0, "z_elevation_cm": 0.3}, {"x_cm": 160.0, "z_elevation_cm": 0.2}], "pelvic_depth_points": [{"transverse_y_cm": -40.0, "depth_mm": 1451.8}, {"transverse_y_cm": -30.0, "depth_mm": 1451.5}, {"transverse_y_cm": -20.0, "depth_mm": 1457.8}, {"transverse_y_cm": -10.0, "depth_mm": 1471.0}, {"transverse_y_cm": 0.0, "depth_mm": 1477.8}, {"transverse_y_cm": 10.0, "depth_mm": 1469.7}, {"transverse_y_cm": 20.0, "depth_mm": 1456.0}, {"transverse_y_cm": 30.0, "depth_mm": 1453.4}, {"transverse_y_cm": 40.0, "depth_mm": 1451.2}]}, "rumen": {"telemetry": {"device_id": "BOLUS-102", "capture_timestamp": "2026-10-29T13:20:38.916370", "rumen_ph": 6.46, "rumen_temperature_c": 39.2, "total_vfa_mmol_l": 102.0, "acetate_to_propionate_ratio": 2.76, "lactic_acid_mmol_l": 0.7, "rumen_contractions_per_min": 2.1, "drinking_bouts_today": 9}, "assessment": {"sara_risk_score": 0.08, "hours_below_ph_5_8": 0.0, "acidosis_stage": "NORMAL", "rumen_motility_status": "NORMAL", "buffer_supplement_needed": false, "clinical_interpretation": "Rumen fermantasyonu sağlıklı (pH 6.46). A:P oranı (2.76) lif parçalayıcı bakteriler için idealdir."}, "hourly_ph_curve": [{"hour": 0, "rumen_ph": 6.63, "is_below_threshold": false}, {"hour": 1, "rumen_ph": 6.65, "is_below_threshold": false}, {"hour": 2, "rumen_ph": 6.67, "is_below_threshold": false}, {"hour": 3, "rumen_ph": 6.66, "is_below_threshold": false}, {"hour": 4, "rumen_ph": 6.6, "is_below_threshold": false}, {"hour": 5, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 6, "rumen_ph": 6.55, "is_below_threshold": false}, {"hour": 7, "rumen_ph": 6.41, "is_below_threshold": false}, {"hour": 8, "rumen_ph": 6.36, "is_below_threshold": false}, {"hour": 9, "rumen_ph": 6.29, "is_below_threshold": false}, {"hour": 10, "rumen_ph": 6.35, "is_below_threshold": false}, {"hour": 11, "rumen_ph": 6.41, "is_below_threshold": false}, {"hour": 12, "rumen_ph": 6.55, "is_below_threshold": false}, {"hour": 13, "rumen_ph": 6.6, "is_below_threshold": false}, {"hour": 14, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 15, "rumen_ph": 6.61, "is_below_threshold": false}, {"hour": 16, "rumen_ph": 6.51, "is_below_threshold": false}, {"hour": 17, "rumen_ph": 6.4, "is_below_threshold": false}, {"hour": 18, "rumen_ph": 6.26, "is_below_threshold": false}, {"hour": 19, "rumen_ph": 6.24, "is_below_threshold": false}, {"hour": 20, "rumen_ph": 6.32, "is_below_threshold": false}, {"hour": 21, "rumen_ph": 6.4, "is_below_threshold": false}, {"hour": 22, "rumen_ph": 6.51, "is_below_threshold": false}, {"hour": 23, "rumen_ph": 6.55, "is_below_threshold": false}]}, "milking_twin": {"robot_id": "VMS-ROBOT-01", "capture_timestamp": "2026-10-29T13:20:38.916470", "animal_id": "TR-34-102", "total_yield_kg": 18.97, "accepted_to_tank_kg": 18.97, "diverted_waste_kg": 0.0, "quarters": {"RF": {"quarter_id": "RF", "quarter_name_tr": "Sağ Ön (Right Front)", "yield_kg": 4.12, "conductivity_ms_cm": 4.92, "somatic_cell_count": 89905, "blood_in_milk_ppm": 3.7, "peak_flow_rate_kg_min": 2.53, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Ön (Right Front) sağlıklı. Hücre sayısı 89,905 hücre/mL, süt ana tanka akıyor."}, "RR": {"quarter_id": "RR", "quarter_name_tr": "Sağ Arka (Right Rear)", "yield_kg": 5.34, "conductivity_ms_cm": 5.09, "somatic_cell_count": 104363, "blood_in_milk_ppm": 2.1, "peak_flow_rate_kg_min": 2.56, "hyperkeratosis_score": 1.5, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Arka (Right Rear) sağlıklı. Hücre sayısı 104,363 hücre/mL, süt ana tanka akıyor."}, "LF": {"quarter_id": "LF", "quarter_name_tr": "Sol Ön (Left Front)", "yield_kg": 4.12, "conductivity_ms_cm": 5.07, "somatic_cell_count": 59782, "blood_in_milk_ppm": 2.3, "peak_flow_rate_kg_min": 2.57, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Ön (Left Front) sağlıklı. Hücre sayısı 59,782 hücre/mL, süt ana tanka akıyor."}, "LR": {"quarter_id": "LR", "quarter_name_tr": "Sol Arka (Left Rear)", "yield_kg": 5.39, "conductivity_ms_cm": 5.14, "somatic_cell_count": 64162, "blood_in_milk_ppm": 2.2, "peak_flow_rate_kg_min": 2.64, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Arka (Left Rear) sağlıklı. Hücre sayısı 64,162 hücre/mL, süt ana tanka akıyor."}}, "weighted_scc": 80118, "is_any_quarter_diverted": false, "teat_cup_disinfection": "Otomatik Başlık İçi Buhar Sterilizasyonu (95°C, 12 sn)", "post_dip_formula": "Standart İyotlu Bariyer Polimer Sprey", "robot_recommendation": "Tüm 4 meme lobu sağlıklı. 4 lobun sütü de doğrudan birinci sınıf ana süt tankına yönlendirildi."}, "calving": null, "pedigree": {"cow_id": "TR-34-102", "cow_name": "Benekli", "sire_id": "US-BULL-CHARL", "sire_name": "Hurtgenlea Richard Charl", "dam_id": "TR-06-DAM-4412", "maternal_grand_sire_id": "US-BULL-RUBICON", "maternal_grand_sire_name": "EDG Rubicon", "individual_inbreeding_coeff_f_pct": 7.1, "gebv": {"net_merit_dollars": 890.0, "tpi_score": 2860, "milk_yield_gebv_kg": 780.0, "fat_gebv_kg": 52.0, "fat_gebv_pct": 0.16, "protein_gebv_kg": 38.0, "protein_gebv_pct": 0.09, "somatic_cell_score_gebv": 2.75, "productive_life_months": 4.1, "daughter_pregnancy_rate_pct": 1.6, "sire_calving_ease_pct": 1.9, "udder_composite_udc": 2.05, "feet_leg_composite_flc": 1.65}, "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}, "breeding_category": "ELITE_DONOR"}}, {"id": "TR-34-103", "name": "Papatya", "breed": "Holstein Friesian", "lactation_number": 1, "days_in_milk": 45, "daily_average_yield": 29.5, "current_zone": "ZONE-A", "telemetry": {"activity_index": 36, "rumination_minutes_2h": 27, "body_temperature_c": 38.5, "lying_time_hours": 11.5, "feed_intake_kg": 16.85}, "latest_milking": {"timestamp": "2026-10-29T12:54:38.916614", "yield_kg": 14.8, "conductivity_ms_cm": 5.15, "milking_duration_sec": 380}, "dss": {"mastitis_risk_score": 0.08, "heat_stress_level": "NONE", "estrus_probability": 0.04, "overall_health_status": "HEALTHY", "recommended_action": "NONE", "xai_explanations": []}, "gate_assignment": "BARN_RETURN", "history_yield": [29.3, 29.1, 29.5, 29.1, 29.6], "physiology": {"wood_params": {"a": 17.8, "b": 0.18, "c": 0.0028}, "peak_dim": 64, "peak_yield": 31.46, "body_weight_kg": 570.0, "body_condition_score": 3.25, "dry_matter_intake_kg": 16.85, "net_energy_balance_mcal": -3.77, "enteric_methane_g_day": 337.1, "methane_intensity_g_per_kg_milk": 11.43, "carbon_equivalent_kg_co2e": 9.44}, "lactation_curve": [{"dim": 10, "expected_yield": 26.2}, {"dim": 25, "expected_yield": 29.62}, {"dim": 40, "expected_yield": 30.91}, {"dim": 55, "expected_yield": 31.39}, {"dim": 70, "expected_yield": 31.44}, {"dim": 85, "expected_yield": 31.21}, {"dim": 100, "expected_yield": 30.82}, {"dim": 115, "expected_yield": 30.3}, {"dim": 130, "expected_yield": 29.71}, {"dim": 145, "expected_yield": 29.05}, {"dim": 160, "expected_yield": 28.35}, {"dim": 175, "expected_yield": 27.63}, {"dim": 190, "expected_yield": 26.89}, {"dim": 205, "expected_yield": 26.14}, {"dim": 220, "expected_yield": 25.38}, {"dim": 235, "expected_yield": 24.63}, {"dim": 250, "expected_yield": 23.88}, {"dim": 265, "expected_yield": 23.14}, {"dim": 280, "expected_yield": 22.41}, {"dim": 295, "expected_yield": 21.69}], "vision": {"capture_timestamp": "2026-10-29T13:20:38.916677", "camera_id": "CAM-EXIT-CHUTE-3D", "confidence_score": 0.95, "lameness": {"score": 1.0, "back_curvature_index": 0.08, "head_bob_amplitude_cm": 2.1, "gait_asymmetry_pct": 3.5, "stride_duration_sec": 1.05, "affected_hoof": null, "clinical_interpretation": "Normal Yürüyüş (Skor 1). Sırt çizgisi düz, adım uzunlukları simetrik."}, "bcs": {"score": 3.25, "angle_hooks_to_pins_deg": 155.0, "sacral_cavity_depth_mm": 26.0, "short_rib_fat_coverage_mm": 14.0, "condition_category": "OPTIMAL", "clinical_interpretation": "Optimal Kondisyon (3.00 - 3.25). Sağlıklı U-şekilli kavis, dengeli laktasyon enerji rezervi."}, "spine_curvature_points": [{"x_cm": 0.0, "z_elevation_cm": -0.0}, {"x_cm": 20.0, "z_elevation_cm": -0.2}, {"x_cm": 40.0, "z_elevation_cm": -0.3}, {"x_cm": 60.0, "z_elevation_cm": 0.0}, {"x_cm": 80.0, "z_elevation_cm": -0.2}, {"x_cm": 100.0, "z_elevation_cm": 0.0}, {"x_cm": 120.0, "z_elevation_cm": -0.2}, {"x_cm": 140.0, "z_elevation_cm": -0.1}, {"x_cm": 160.0, "z_elevation_cm": -0.4}], "pelvic_depth_points": [{"transverse_y_cm": -40.0, "depth_mm": 1449.2}, {"transverse_y_cm": -30.0, "depth_mm": 1450.5}, {"transverse_y_cm": -20.0, "depth_mm": 1458.1}, {"transverse_y_cm": -10.0, "depth_mm": 1469.4}, {"transverse_y_cm": 0.0, "depth_mm": 1474.0}, {"transverse_y_cm": 10.0, "depth_mm": 1470.2}, {"transverse_y_cm": 20.0, "depth_mm": 1456.0}, {"transverse_y_cm": 30.0, "depth_mm": 1451.6}, {"transverse_y_cm": 40.0, "depth_mm": 1450.2}]}, "rumen": {"telemetry": {"device_id": "BOLUS-103", "capture_timestamp": "2026-10-29T13:20:38.916789", "rumen_ph": 6.52, "rumen_temperature_c": 39.0, "total_vfa_mmol_l": 107.7, "acetate_to_propionate_ratio": 2.88, "lactic_acid_mmol_l": 0.9, "rumen_contractions_per_min": 2.0, "drinking_bouts_today": 10}, "assessment": {"sara_risk_score": 0.08, "hours_below_ph_5_8": 0.0, "acidosis_stage": "NORMAL", "rumen_motility_status": "NORMAL", "buffer_supplement_needed": false, "clinical_interpretation": "Rumen fermantasyonu sağlıklı (pH 6.52). A:P oranı (2.88) lif parçalayıcı bakteriler için idealdir."}, "hourly_ph_curve": [{"hour": 0, "rumen_ph": 6.72, "is_below_threshold": false}, {"hour": 1, "rumen_ph": 6.72, "is_below_threshold": false}, {"hour": 2, "rumen_ph": 6.74, "is_below_threshold": false}, {"hour": 3, "rumen_ph": 6.73, "is_below_threshold": false}, {"hour": 4, "rumen_ph": 6.68, "is_below_threshold": false}, {"hour": 5, "rumen_ph": 6.62, "is_below_threshold": false}, {"hour": 6, "rumen_ph": 6.62, "is_below_threshold": false}, {"hour": 7, "rumen_ph": 6.5, "is_below_threshold": false}, {"hour": 8, "rumen_ph": 6.36, "is_below_threshold": false}, {"hour": 9, "rumen_ph": 6.33, "is_below_threshold": false}, {"hour": 10, "rumen_ph": 6.36, "is_below_threshold": false}, {"hour": 11, "rumen_ph": 6.5, "is_below_threshold": false}, {"hour": 12, "rumen_ph": 6.56, "is_below_threshold": false}, {"hour": 13, "rumen_ph": 6.63, "is_below_threshold": false}, {"hour": 14, "rumen_ph": 6.66, "is_below_threshold": false}, {"hour": 15, "rumen_ph": 6.67, "is_below_threshold": false}, {"hour": 16, "rumen_ph": 6.59, "is_below_threshold": false}, {"hour": 17, "rumen_ph": 6.44, "is_below_threshold": false}, {"hour": 18, "rumen_ph": 6.33, "is_below_threshold": false}, {"hour": 19, "rumen_ph": 6.33, "is_below_threshold": false}, {"hour": 20, "rumen_ph": 6.36, "is_below_threshold": false}, {"hour": 21, "rumen_ph": 6.45, "is_below_threshold": false}, {"hour": 22, "rumen_ph": 6.57, "is_below_threshold": false}, {"hour": 23, "rumen_ph": 6.68, "is_below_threshold": false}]}, "milking_twin": {"robot_id": "VMS-ROBOT-01", "capture_timestamp": "2026-10-29T13:20:38.916941", "animal_id": "TR-34-103", "total_yield_kg": 14.92, "accepted_to_tank_kg": 14.92, "diverted_waste_kg": 0.0, "quarters": {"RF": {"quarter_id": "RF", "quarter_name_tr": "Sağ Ön (Right Front)", "yield_kg": 3.36, "conductivity_ms_cm": 4.98, "somatic_cell_count": 102779, "blood_in_milk_ppm": 4.7, "peak_flow_rate_kg_min": 2.32, "hyperkeratosis_score": 1.5, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Ön (Right Front) sağlıklı. Hücre sayısı 102,779 hücre/mL, süt ana tanka akıyor."}, "RR": {"quarter_id": "RR", "quarter_name_tr": "Sağ Arka (Right Rear)", "yield_kg": 4.24, "conductivity_ms_cm": 5.1, "somatic_cell_count": 68857, "blood_in_milk_ppm": 4.2, "peak_flow_rate_kg_min": 2.63, "hyperkeratosis_score": 1.5, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Arka (Right Rear) sağlıklı. Hücre sayısı 68,857 hücre/mL, süt ana tanka akıyor."}, "LF": {"quarter_id": "LF", "quarter_name_tr": "Sol Ön (Left Front)", "yield_kg": 3.19, "conductivity_ms_cm": 4.94, "somatic_cell_count": 126525, "blood_in_milk_ppm": 1.1, "peak_flow_rate_kg_min": 2.63, "hyperkeratosis_score": 1.4, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Ön (Left Front) sağlıklı. Hücre sayısı 126,525 hücre/mL, süt ana tanka akıyor."}, "LR": {"quarter_id": "LR", "quarter_name_tr": "Sol Arka (Left Rear)", "yield_kg": 4.13, "conductivity_ms_cm": 5.11, "somatic_cell_count": 101492, "blood_in_milk_ppm": 2.9, "peak_flow_rate_kg_min": 2.3, "hyperkeratosis_score": 1.2, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Arka (Left Rear) sağlıklı. Hücre sayısı 101,492 hücre/mL, süt ana tanka akıyor."}}, "weighted_scc": 97859, "is_any_quarter_diverted": false, "teat_cup_disinfection": "Otomatik Başlık İçi Buhar Sterilizasyonu (95°C, 12 sn)", "post_dip_formula": "Standart İyotlu Bariyer Polimer Sprey", "robot_recommendation": "Tüm 4 meme lobu sağlıklı. 4 lobun sütü de doğrudan birinci sınıf ana süt tankına yönlendirildi."}, "calving": null, "pedigree": {"cow_id": "TR-34-103", "cow_name": "Papatya", "sire_id": "US-BULL-SABER", "sire_name": "No-Fla Saber", "dam_id": "TR-06-DAM-4425", "maternal_grand_sire_id": "US-BULL-JIKEL", "maternal_grand_sire_name": "Jikel ET", "individual_inbreeding_coeff_f_pct": 4.8, "gebv": {"net_merit_dollars": 610.0, "tpi_score": 2510, "milk_yield_gebv_kg": 440.0, "fat_gebv_kg": 29.0, "fat_gebv_pct": 0.08, "protein_gebv_kg": 22.0, "protein_gebv_pct": 0.04, "somatic_cell_score_gebv": 2.92, "productive_life_months": 2.8, "daughter_pregnancy_rate_pct": 0.8, "sire_calving_ease_pct": 2.4, "udder_composite_udc": 1.45, "feet_leg_composite_flc": 1.25}, "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}, "breeding_category": "COMMERCIAL_DAIRY"}}, {"id": "TR-34-104", "name": "Yıldız", "breed": "Holstein Friesian", "lactation_number": 2, "days_in_milk": 190, "daily_average_yield": 31.0, "current_zone": "ZONE-B", "telemetry": {"activity_index": 40, "rumination_minutes_2h": 25, "body_temperature_c": 38.4, "lying_time_hours": 11.5, "feed_intake_kg": 20.91}, "latest_milking": {"timestamp": "2026-10-29T12:42:38.917144", "yield_kg": 15.5, "conductivity_ms_cm": 5.15, "milking_duration_sec": 380}, "dss": {"mastitis_risk_score": 0.08, "heat_stress_level": "NONE", "estrus_probability": 0.04, "overall_health_status": "HEALTHY", "recommended_action": "NONE", "xai_explanations": []}, "gate_assignment": "BARN_RETURN", "history_yield": [31.4, 30.6, 30.9, 31.5, 31.1], "physiology": {"wood_params": {"a": 21.0, "b": 0.21, "c": 0.0034}, "peak_dim": 62, "peak_yield": 40.46, "body_weight_kg": 630.0, "body_condition_score": 3.25, "dry_matter_intake_kg": 20.91, "net_energy_balance_mcal": 1.47, "enteric_methane_g_day": 418.4, "methane_intensity_g_per_kg_milk": 13.5, "carbon_equivalent_kg_co2e": 11.72}, "lactation_curve": [{"dim": 10, "expected_yield": 32.92}, {"dim": 25, "expected_yield": 37.92}, {"dim": 40, "expected_yield": 39.77}, {"dim": 55, "expected_yield": 40.41}, {"dim": 70, "expected_yield": 40.4}, {"dim": 85, "expected_yield": 39.98}, {"dim": 100, "expected_yield": 39.32}, {"dim": 115, "expected_yield": 38.47}, {"dim": 130, "expected_yield": 37.51}, {"dim": 145, "expected_yield": 36.48}, {"dim": 160, "expected_yield": 35.39}, {"dim": 175, "expected_yield": 34.27}, {"dim": 190, "expected_yield": 33.13}, {"dim": 205, "expected_yield": 31.99}, {"dim": 220, "expected_yield": 30.85}, {"dim": 235, "expected_yield": 29.73}, {"dim": 250, "expected_yield": 28.62}, {"dim": 265, "expected_yield": 27.53}, {"dim": 280, "expected_yield": 26.47}, {"dim": 295, "expected_yield": 25.43}], "vision": {"capture_timestamp": "2026-10-29T13:20:38.917159", "camera_id": "CAM-EXIT-CHUTE-3D", "confidence_score": 0.95, "lameness": {"score": 1.0, "back_curvature_index": 0.08, "head_bob_amplitude_cm": 2.1, "gait_asymmetry_pct": 3.5, "stride_duration_sec": 1.05, "affected_hoof": null, "clinical_interpretation": "Normal Yürüyüş (Skor 1). Sırt çizgisi düz, adım uzunlukları simetrik."}, "bcs": {"score": 3.25, "angle_hooks_to_pins_deg": 155.0, "sacral_cavity_depth_mm": 26.0, "short_rib_fat_coverage_mm": 14.0, "condition_category": "OPTIMAL", "clinical_interpretation": "Optimal Kondisyon (3.00 - 3.25). Sağlıklı U-şekilli kavis, dengeli laktasyon enerji rezervi."}, "spine_curvature_points": [{"x_cm": 0.0, "z_elevation_cm": -0.1}, {"x_cm": 20.0, "z_elevation_cm": 0.1}, {"x_cm": 40.0, "z_elevation_cm": -0.3}, {"x_cm": 60.0, "z_elevation_cm": 0.3}, {"x_cm": 80.0, "z_elevation_cm": 0.1}, {"x_cm": 100.0, "z_elevation_cm": 0.4}, {"x_cm": 120.0, "z_elevation_cm": 0.3}, {"x_cm": 140.0, "z_elevation_cm": -0.1}, {"x_cm": 160.0, "z_elevation_cm": -0.2}], "pelvic_depth_points": [{"transverse_y_cm": -40.0, "depth_mm": 1451.7}, {"transverse_y_cm": -30.0, "depth_mm": 1450.9}, {"transverse_y_cm": -20.0, "depth_mm": 1459.1}, {"transverse_y_cm": -10.0, "depth_mm": 1470.3}, {"transverse_y_cm": 0.0, "depth_mm": 1477.6}, {"transverse_y_cm": 10.0, "depth_mm": 1470.7}, {"transverse_y_cm": 20.0, "depth_mm": 1458.7}, {"transverse_y_cm": 30.0, "depth_mm": 1449.7}, {"transverse_y_cm": 40.0, "depth_mm": 1448.8}]}, "rumen": {"telemetry": {"device_id": "BOLUS-104", "capture_timestamp": "2026-10-29T13:20:38.917215", "rumen_ph": 6.49, "rumen_temperature_c": 39.2, "total_vfa_mmol_l": 115.0, "acetate_to_propionate_ratio": 2.96, "lactic_acid_mmol_l": 0.7, "rumen_contractions_per_min": 2.0, "drinking_bouts_today": 10}, "assessment": {"sara_risk_score": 0.08, "hours_below_ph_5_8": 0.0, "acidosis_stage": "NORMAL", "rumen_motility_status": "NORMAL", "buffer_supplement_needed": false, "clinical_interpretation": "Rumen fermantasyonu sağlıklı (pH 6.49). A:P oranı (2.96) lif parçalayıcı bakteriler için idealdir."}, "hourly_ph_curve": [{"hour": 0, "rumen_ph": 6.67, "is_below_threshold": false}, {"hour": 1, "rumen_ph": 6.69, "is_below_threshold": false}, {"hour": 2, "rumen_ph": 6.69, "is_below_threshold": false}, {"hour": 3, "rumen_ph": 6.64, "is_below_threshold": false}, {"hour": 4, "rumen_ph": 6.66, "is_below_threshold": false}, {"hour": 5, "rumen_ph": 6.61, "is_below_threshold": false}, {"hour": 6, "rumen_ph": 6.54, "is_below_threshold": false}, {"hour": 7, "rumen_ph": 6.46, "is_below_threshold": false}, {"hour": 8, "rumen_ph": 6.34, "is_below_threshold": false}, {"hour": 9, "rumen_ph": 6.31, "is_below_threshold": false}, {"hour": 10, "rumen_ph": 6.33, "is_below_threshold": false}, {"hour": 11, "rumen_ph": 6.47, "is_below_threshold": false}, {"hour": 12, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 13, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 14, "rumen_ph": 6.62, "is_below_threshold": false}, {"hour": 15, "rumen_ph": 6.64, "is_below_threshold": false}, {"hour": 16, "rumen_ph": 6.54, "is_below_threshold": false}, {"hour": 17, "rumen_ph": 6.39, "is_below_threshold": false}, {"hour": 18, "rumen_ph": 6.3, "is_below_threshold": false}, {"hour": 19, "rumen_ph": 6.26, "is_below_threshold": false}, {"hour": 20, "rumen_ph": 6.33, "is_below_threshold": false}, {"hour": 21, "rumen_ph": 6.4, "is_below_threshold": false}, {"hour": 22, "rumen_ph": 6.57, "is_below_threshold": false}, {"hour": 23, "rumen_ph": 6.58, "is_below_threshold": false}]}, "milking_twin": {"robot_id": "VMS-ROBOT-01", "capture_timestamp": "2026-10-29T13:20:38.917307", "animal_id": "TR-34-104", "total_yield_kg": 15.32, "accepted_to_tank_kg": 15.32, "diverted_waste_kg": 0.0, "quarters": {"RF": {"quarter_id": "RF", "quarter_name_tr": "Sağ Ön (Right Front)", "yield_kg": 3.3, "conductivity_ms_cm": 5.02, "somatic_cell_count": 52096, "blood_in_milk_ppm": 3.8, "peak_flow_rate_kg_min": 2.46, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Ön (Right Front) sağlıklı. Hücre sayısı 52,096 hücre/mL, süt ana tanka akıyor."}, "RR": {"quarter_id": "RR", "quarter_name_tr": "Sağ Arka (Right Rear)", "yield_kg": 4.43, "conductivity_ms_cm": 5.04, "somatic_cell_count": 120616, "blood_in_milk_ppm": 5.1, "peak_flow_rate_kg_min": 2.68, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Arka (Right Rear) sağlıklı. Hücre sayısı 120,616 hücre/mL, süt ana tanka akıyor."}, "LF": {"quarter_id": "LF", "quarter_name_tr": "Sol Ön (Left Front)", "yield_kg": 3.19, "conductivity_ms_cm": 5.13, "somatic_cell_count": 122533, "blood_in_milk_ppm": 3.3, "peak_flow_rate_kg_min": 2.68, "hyperkeratosis_score": 1.2, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Ön (Left Front) sağlıklı. Hücre sayısı 122,533 hücre/mL, süt ana tanka akıyor."}, "LR": {"quarter_id": "LR", "quarter_name_tr": "Sol Arka (Left Rear)", "yield_kg": 4.4, "conductivity_ms_cm": 4.9, "somatic_cell_count": 64150, "blood_in_milk_ppm": 4.5, "peak_flow_rate_kg_min": 2.53, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Arka (Left Rear) sağlıklı. Hücre sayısı 64,150 hücre/mL, süt ana tanka akıyor."}}, "weighted_scc": 90038, "is_any_quarter_diverted": false, "teat_cup_disinfection": "Otomatik Başlık İçi Buhar Sterilizasyonu (95°C, 12 sn)", "post_dip_formula": "Standart İyotlu Bariyer Polimer Sprey", "robot_recommendation": "Tüm 4 meme lobu sağlıklı. 4 lobun sütü de doğrudan birinci sınıf ana süt tankına yönlendirildi."}, "calving": null, "pedigree": {"cow_id": "TR-34-104", "cow_name": "Yıldız", "sire_id": "US-BULL-CASPER", "sire_name": "Claynook Casper", "dam_id": "TR-06-DAM-4438", "maternal_grand_sire_id": "US-BULL-MOGUL", "maternal_grand_sire_name": "Mountfield SSI Mogul", "individual_inbreeding_coeff_f_pct": 6.4, "gebv": {"net_merit_dollars": 760.0, "tpi_score": 2690, "milk_yield_gebv_kg": 620.0, "fat_gebv_kg": 41.0, "fat_gebv_pct": 0.14, "protein_gebv_kg": 30.0, "protein_gebv_pct": 0.07, "somatic_cell_score_gebv": 2.8, "productive_life_months": 3.6, "daughter_pregnancy_rate_pct": 1.3, "sire_calving_ease_pct": 2.0, "udder_composite_udc": 1.8, "feet_leg_composite_flc": 1.15}, "recessives": {"hcd_cholesterol_deficiency": true, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "⚠️ HCD (Kolesterol Eksikliği) TAŞIYICISI"}, "breeding_category": "COMMERCIAL_DAIRY"}}, {"id": "TR-34-105", "name": "Elif", "breed": "Holstein Friesian", "lactation_number": 1, "days_in_milk": 60, "daily_average_yield": 28.0, "current_zone": "ZONE-B", "telemetry": {"activity_index": 40, "rumination_minutes_2h": 25, "body_temperature_c": 38.5, "lying_time_hours": 11.5, "feed_intake_kg": 17.16}, "latest_milking": {"timestamp": "2026-10-29T12:47:38.917440", "yield_kg": 14.0, "conductivity_ms_cm": 5.15, "milking_duration_sec": 380}, "dss": {"mastitis_risk_score": 0.08, "heat_stress_level": "NONE", "estrus_probability": 0.04, "overall_health_status": "HEALTHY", "recommended_action": "NONE", "xai_explanations": []}, "gate_assignment": "BARN_RETURN", "history_yield": [28.1, 28.2, 27.8, 28.3, 27.9], "physiology": {"wood_params": {"a": 17.0, "b": 0.17, "c": 0.0026}, "peak_dim": 65, "peak_yield": 29.19, "body_weight_kg": 560.0, "body_condition_score": 3.25, "dry_matter_intake_kg": 17.16, "net_energy_balance_mcal": -1.95, "enteric_methane_g_day": 343.3, "methane_intensity_g_per_kg_milk": 12.26, "carbon_equivalent_kg_co2e": 9.61}, "lactation_curve": [{"dim": 10, "expected_yield": 24.5}, {"dim": 25, "expected_yield": 27.53}, {"dim": 40, "expected_yield": 28.68}, {"dim": 55, "expected_yield": 29.12}, {"dim": 70, "expected_yield": 29.18}, {"dim": 85, "expected_yield": 29.0}, {"dim": 100, "expected_yield": 28.68}, {"dim": 115, "expected_yield": 28.24}, {"dim": 130, "expected_yield": 27.73}, {"dim": 145, "expected_yield": 27.17}, {"dim": 160, "expected_yield": 26.58}, {"dim": 175, "expected_yield": 25.95}, {"dim": 190, "expected_yield": 25.31}, {"dim": 205, "expected_yield": 24.66}, {"dim": 220, "expected_yield": 24.0}, {"dim": 235, "expected_yield": 23.34}, {"dim": 250, "expected_yield": 22.69}, {"dim": 265, "expected_yield": 22.04}, {"dim": 280, "expected_yield": 21.39}, {"dim": 295, "expected_yield": 20.76}], "vision": {"capture_timestamp": "2026-10-29T13:20:38.917455", "camera_id": "CAM-EXIT-CHUTE-3D", "confidence_score": 0.95, "lameness": {"score": 1.0, "back_curvature_index": 0.08, "head_bob_amplitude_cm": 2.1, "gait_asymmetry_pct": 3.5, "stride_duration_sec": 1.05, "affected_hoof": null, "clinical_interpretation": "Normal Yürüyüş (Skor 1). Sırt çizgisi düz, adım uzunlukları simetrik."}, "bcs": {"score": 3.25, "angle_hooks_to_pins_deg": 155.0, "sacral_cavity_depth_mm": 26.0, "short_rib_fat_coverage_mm": 14.0, "condition_category": "OPTIMAL", "clinical_interpretation": "Optimal Kondisyon (3.00 - 3.25). Sağlıklı U-şekilli kavis, dengeli laktasyon enerji rezervi."}, "spine_curvature_points": [{"x_cm": 0.0, "z_elevation_cm": -0.3}, {"x_cm": 20.0, "z_elevation_cm": 0.3}, {"x_cm": 40.0, "z_elevation_cm": 0.1}, {"x_cm": 60.0, "z_elevation_cm": 0.2}, {"x_cm": 80.0, "z_elevation_cm": -0.2}, {"x_cm": 100.0, "z_elevation_cm": -0.2}, {"x_cm": 120.0, "z_elevation_cm": 0.2}, {"x_cm": 140.0, "z_elevation_cm": 0.0}, {"x_cm": 160.0, "z_elevation_cm": 0.1}], "pelvic_depth_points": [{"transverse_y_cm": -40.0, "depth_mm": 1450.0}, {"transverse_y_cm": -30.0, "depth_mm": 1450.2}, {"transverse_y_cm": -20.0, "depth_mm": 1459.4}, {"transverse_y_cm": -10.0, "depth_mm": 1469.7}, {"transverse_y_cm": 0.0, "depth_mm": 1474.9}, {"transverse_y_cm": 10.0, "depth_mm": 1468.7}, {"transverse_y_cm": 20.0, "depth_mm": 1459.4}, {"transverse_y_cm": 30.0, "depth_mm": 1452.3}, {"transverse_y_cm": 40.0, "depth_mm": 1451.4}]}, "rumen": {"telemetry": {"device_id": "BOLUS-105", "capture_timestamp": "2026-10-29T13:20:38.917512", "rumen_ph": 6.51, "rumen_temperature_c": 39.3, "total_vfa_mmol_l": 106.6, "acetate_to_propionate_ratio": 2.78, "lactic_acid_mmol_l": 0.9, "rumen_contractions_per_min": 1.8, "drinking_bouts_today": 9}, "assessment": {"sara_risk_score": 0.08, "hours_below_ph_5_8": 0.0, "acidosis_stage": "NORMAL", "rumen_motility_status": "NORMAL", "buffer_supplement_needed": false, "clinical_interpretation": "Rumen fermantasyonu sağlıklı (pH 6.51). A:P oranı (2.78) lif parçalayıcı bakteriler için idealdir."}, "hourly_ph_curve": [{"hour": 0, "rumen_ph": 6.69, "is_below_threshold": false}, {"hour": 1, "rumen_ph": 6.66, "is_below_threshold": false}, {"hour": 2, "rumen_ph": 6.71, "is_below_threshold": false}, {"hour": 3, "rumen_ph": 6.72, "is_below_threshold": false}, {"hour": 4, "rumen_ph": 6.64, "is_below_threshold": false}, {"hour": 5, "rumen_ph": 6.63, "is_below_threshold": false}, {"hour": 6, "rumen_ph": 6.62, "is_below_threshold": false}, {"hour": 7, "rumen_ph": 6.47, "is_below_threshold": false}, {"hour": 8, "rumen_ph": 6.42, "is_below_threshold": false}, {"hour": 9, "rumen_ph": 6.36, "is_below_threshold": false}, {"hour": 10, "rumen_ph": 6.37, "is_below_threshold": false}, {"hour": 11, "rumen_ph": 6.44, "is_below_threshold": false}, {"hour": 12, "rumen_ph": 6.6, "is_below_threshold": false}, {"hour": 13, "rumen_ph": 6.61, "is_below_threshold": false}, {"hour": 14, "rumen_ph": 6.68, "is_below_threshold": false}, {"hour": 15, "rumen_ph": 6.64, "is_below_threshold": false}, {"hour": 16, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 17, "rumen_ph": 6.45, "is_below_threshold": false}, {"hour": 18, "rumen_ph": 6.31, "is_below_threshold": false}, {"hour": 19, "rumen_ph": 6.33, "is_below_threshold": false}, {"hour": 20, "rumen_ph": 6.33, "is_below_threshold": false}, {"hour": 21, "rumen_ph": 6.41, "is_below_threshold": false}, {"hour": 22, "rumen_ph": 6.53, "is_below_threshold": false}, {"hour": 23, "rumen_ph": 6.63, "is_below_threshold": false}]}, "milking_twin": {"robot_id": "VMS-ROBOT-01", "capture_timestamp": "2026-10-29T13:20:38.917600", "animal_id": "TR-34-105", "total_yield_kg": 13.77, "accepted_to_tank_kg": 13.77, "diverted_waste_kg": 0.0, "quarters": {"RF": {"quarter_id": "RF", "quarter_name_tr": "Sağ Ön (Right Front)", "yield_kg": 2.95, "conductivity_ms_cm": 5.16, "somatic_cell_count": 116592, "blood_in_milk_ppm": 3.1, "peak_flow_rate_kg_min": 2.25, "hyperkeratosis_score": 1.4, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Ön (Right Front) sağlıklı. Hücre sayısı 116,592 hücre/mL, süt ana tanka akıyor."}, "RR": {"quarter_id": "RR", "quarter_name_tr": "Sağ Arka (Right Rear)", "yield_kg": 3.85, "conductivity_ms_cm": 5.12, "somatic_cell_count": 98824, "blood_in_milk_ppm": 1.6, "peak_flow_rate_kg_min": 2.24, "hyperkeratosis_score": 1.2, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Arka (Right Rear) sağlıklı. Hücre sayısı 98,824 hücre/mL, süt ana tanka akıyor."}, "LF": {"quarter_id": "LF", "quarter_name_tr": "Sol Ön (Left Front)", "yield_kg": 2.94, "conductivity_ms_cm": 5.0, "somatic_cell_count": 85758, "blood_in_milk_ppm": 4.9, "peak_flow_rate_kg_min": 2.38, "hyperkeratosis_score": 1.5, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Ön (Left Front) sağlıklı. Hücre sayısı 85,758 hücre/mL, süt ana tanka akıyor."}, "LR": {"quarter_id": "LR", "quarter_name_tr": "Sol Arka (Left Rear)", "yield_kg": 4.03, "conductivity_ms_cm": 5.19, "somatic_cell_count": 122749, "blood_in_milk_ppm": 5.8, "peak_flow_rate_kg_min": 2.27, "hyperkeratosis_score": 1.3, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Arka (Left Rear) sağlıklı. Hücre sayısı 122,749 hücre/mL, süt ana tanka akıyor."}}, "weighted_scc": 106842, "is_any_quarter_diverted": false, "teat_cup_disinfection": "Otomatik Başlık İçi Buhar Sterilizasyonu (95°C, 12 sn)", "post_dip_formula": "Standart İyotlu Bariyer Polimer Sprey", "robot_recommendation": "Tüm 4 meme lobu sağlıklı. 4 lobun sütü de doğrudan birinci sınıf ana süt tankına yönlendirildi."}, "calving": null, "pedigree": {"cow_id": "TR-34-105", "cow_name": "Elif", "sire_id": "US-BULL-TOPNOTCH", "sire_name": "Progenesis Topnotch", "dam_id": "TR-06-DAM-4450", "maternal_grand_sire_id": "US-BULL-RUBICON", "maternal_grand_sire_name": "EDG Rubicon", "individual_inbreeding_coeff_f_pct": 5.1, "gebv": {"net_merit_dollars": 840.0, "tpi_score": 2790, "milk_yield_gebv_kg": 710.0, "fat_gebv_kg": 46.0, "fat_gebv_pct": 0.15, "protein_gebv_kg": 34.0, "protein_gebv_pct": 0.08, "somatic_cell_score_gebv": 2.74, "productive_life_months": 4.0, "daughter_pregnancy_rate_pct": 1.8, "sire_calving_ease_pct": 1.8, "udder_composite_udc": 2.1, "feet_leg_composite_flc": 1.7}, "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}, "breeding_category": "ELITE_DONOR"}}, {"id": "TR-34-106", "name": "Nazlı", "breed": "Holstein Friesian", "lactation_number": 4, "days_in_milk": 210, "daily_average_yield": 33.0, "current_zone": "ZONE-B", "telemetry": {"activity_index": 39, "rumination_minutes_2h": 25, "body_temperature_c": 38.6, "lying_time_hours": 11.5, "feed_intake_kg": 22.16}, "latest_milking": {"timestamp": "2026-10-29T13:02:38.917730", "yield_kg": 16.5, "conductivity_ms_cm": 5.15, "milking_duration_sec": 380}, "dss": {"mastitis_risk_score": 0.08, "heat_stress_level": "NONE", "estrus_probability": 0.04, "overall_health_status": "HEALTHY", "recommended_action": "NONE", "xai_explanations": []}, "gate_assignment": "BARN_RETURN", "history_yield": [32.9, 32.6, 33.0, 33.5, 33.5], "physiology": {"wood_params": {"a": 23.5, "b": 0.23, "c": 0.004}, "peak_dim": 58, "peak_yield": 47.41, "body_weight_kg": 680.0, "body_condition_score": 3.25, "dry_matter_intake_kg": 22.16, "net_energy_balance_mcal": 2.16, "enteric_methane_g_day": 443.4, "methane_intensity_g_per_kg_milk": 13.44, "carbon_equivalent_kg_co2e": 12.42}, "lactation_curve": [{"dim": 10, "expected_yield": 38.34}, {"dim": 25, "expected_yield": 44.58}, {"dim": 40, "expected_yield": 46.78}, {"dim": 55, "expected_yield": 47.4}, {"dim": 70, "expected_yield": 47.19}, {"dim": 85, "expected_yield": 46.47}, {"dim": 100, "expected_yield": 45.43}, {"dim": 115, "expected_yield": 44.18}, {"dim": 130, "expected_yield": 42.8}, {"dim": 145, "expected_yield": 41.33}, {"dim": 160, "expected_yield": 39.82}, {"dim": 175, "expected_yield": 38.28}, {"dim": 190, "expected_yield": 36.74}, {"dim": 205, "expected_yield": 35.21}, {"dim": 220, "expected_yield": 33.7}, {"dim": 235, "expected_yield": 32.22}, {"dim": 250, "expected_yield": 30.78}, {"dim": 265, "expected_yield": 29.38}, {"dim": 280, "expected_yield": 28.02}, {"dim": 295, "expected_yield": 26.71}], "vision": {"capture_timestamp": "2026-10-29T13:20:38.917744", "camera_id": "CAM-EXIT-CHUTE-3D", "confidence_score": 0.95, "lameness": {"score": 1.0, "back_curvature_index": 0.08, "head_bob_amplitude_cm": 2.1, "gait_asymmetry_pct": 3.5, "stride_duration_sec": 1.05, "affected_hoof": null, "clinical_interpretation": "Normal Yürüyüş (Skor 1). Sırt çizgisi düz, adım uzunlukları simetrik."}, "bcs": {"score": 3.25, "angle_hooks_to_pins_deg": 155.0, "sacral_cavity_depth_mm": 26.0, "short_rib_fat_coverage_mm": 14.0, "condition_category": "OPTIMAL", "clinical_interpretation": "Optimal Kondisyon (3.00 - 3.25). Sağlıklı U-şekilli kavis, dengeli laktasyon enerji rezervi."}, "spine_curvature_points": [{"x_cm": 0.0, "z_elevation_cm": 0.4}, {"x_cm": 20.0, "z_elevation_cm": -0.2}, {"x_cm": 40.0, "z_elevation_cm": 0.3}, {"x_cm": 60.0, "z_elevation_cm": -0.2}, {"x_cm": 80.0, "z_elevation_cm": 0.0}, {"x_cm": 100.0, "z_elevation_cm": 0.4}, {"x_cm": 120.0, "z_elevation_cm": -0.4}, {"x_cm": 140.0, "z_elevation_cm": 0.1}, {"x_cm": 160.0, "z_elevation_cm": 0.1}], "pelvic_depth_points": [{"transverse_y_cm": -40.0, "depth_mm": 1448.7}, {"transverse_y_cm": -30.0, "depth_mm": 1452.9}, {"transverse_y_cm": -20.0, "depth_mm": 1459.5}, {"transverse_y_cm": -10.0, "depth_mm": 1469.9}, {"transverse_y_cm": 0.0, "depth_mm": 1475.4}, {"transverse_y_cm": 10.0, "depth_mm": 1467.8}, {"transverse_y_cm": 20.0, "depth_mm": 1458.8}, {"transverse_y_cm": 30.0, "depth_mm": 1453.1}, {"transverse_y_cm": 40.0, "depth_mm": 1450.5}]}, "rumen": {"telemetry": {"device_id": "BOLUS-106", "capture_timestamp": "2026-10-29T13:20:38.917798", "rumen_ph": 6.42, "rumen_temperature_c": 39.1, "total_vfa_mmol_l": 113.5, "acetate_to_propionate_ratio": 3.0, "lactic_acid_mmol_l": 0.7, "rumen_contractions_per_min": 1.8, "drinking_bouts_today": 12}, "assessment": {"sara_risk_score": 0.08, "hours_below_ph_5_8": 0.0, "acidosis_stage": "NORMAL", "rumen_motility_status": "NORMAL", "buffer_supplement_needed": false, "clinical_interpretation": "Rumen fermantasyonu sağlıklı (pH 6.42). A:P oranı (3.0) lif parçalayıcı bakteriler için idealdir."}, "hourly_ph_curve": [{"hour": 0, "rumen_ph": 6.56, "is_below_threshold": false}, {"hour": 1, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 2, "rumen_ph": 6.6, "is_below_threshold": false}, {"hour": 3, "rumen_ph": 6.62, "is_below_threshold": false}, {"hour": 4, "rumen_ph": 6.56, "is_below_threshold": false}, {"hour": 5, "rumen_ph": 6.52, "is_below_threshold": false}, {"hour": 6, "rumen_ph": 6.47, "is_below_threshold": false}, {"hour": 7, "rumen_ph": 6.39, "is_below_threshold": false}, {"hour": 8, "rumen_ph": 6.31, "is_below_threshold": false}, {"hour": 9, "rumen_ph": 6.28, "is_below_threshold": false}, {"hour": 10, "rumen_ph": 6.26, "is_below_threshold": false}, {"hour": 11, "rumen_ph": 6.39, "is_below_threshold": false}, {"hour": 12, "rumen_ph": 6.52, "is_below_threshold": false}, {"hour": 13, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 14, "rumen_ph": 6.58, "is_below_threshold": false}, {"hour": 15, "rumen_ph": 6.56, "is_below_threshold": false}, {"hour": 16, "rumen_ph": 6.5, "is_below_threshold": false}, {"hour": 17, "rumen_ph": 6.32, "is_below_threshold": false}, {"hour": 18, "rumen_ph": 6.28, "is_below_threshold": false}, {"hour": 19, "rumen_ph": 6.17, "is_below_threshold": false}, {"hour": 20, "rumen_ph": 6.24, "is_below_threshold": false}, {"hour": 21, "rumen_ph": 6.36, "is_below_threshold": false}, {"hour": 22, "rumen_ph": 6.44, "is_below_threshold": false}, {"hour": 23, "rumen_ph": 6.57, "is_below_threshold": false}]}, "milking_twin": {"robot_id": "VMS-ROBOT-01", "capture_timestamp": "2026-10-29T13:20:38.917891", "animal_id": "TR-34-106", "total_yield_kg": 16.64, "accepted_to_tank_kg": 16.64, "diverted_waste_kg": 0.0, "quarters": {"RF": {"quarter_id": "RF", "quarter_name_tr": "Sağ Ön (Right Front)", "yield_kg": 3.59, "conductivity_ms_cm": 4.9, "somatic_cell_count": 49872, "blood_in_milk_ppm": 2.7, "peak_flow_rate_kg_min": 2.54, "hyperkeratosis_score": 1.4, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Ön (Right Front) sağlıklı. Hücre sayısı 49,872 hücre/mL, süt ana tanka akıyor."}, "RR": {"quarter_id": "RR", "quarter_name_tr": "Sağ Arka (Right Rear)", "yield_kg": 4.75, "conductivity_ms_cm": 4.92, "somatic_cell_count": 98800, "blood_in_milk_ppm": 5.2, "peak_flow_rate_kg_min": 2.4, "hyperkeratosis_score": 1.5, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sağ Arka (Right Rear) sağlıklı. Hücre sayısı 98,800 hücre/mL, süt ana tanka akıyor."}, "LF": {"quarter_id": "LF", "quarter_name_tr": "Sol Ön (Left Front)", "yield_kg": 3.56, "conductivity_ms_cm": 4.96, "somatic_cell_count": 63511, "blood_in_milk_ppm": 2.9, "peak_flow_rate_kg_min": 2.61, "hyperkeratosis_score": 1.2, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Ön (Left Front) sağlıklı. Hücre sayısı 63,511 hücre/mL, süt ana tanka akıyor."}, "LR": {"quarter_id": "LR", "quarter_name_tr": "Sol Arka (Left Rear)", "yield_kg": 4.74, "conductivity_ms_cm": 5.04, "somatic_cell_count": 75403, "blood_in_milk_ppm": 4.4, "peak_flow_rate_kg_min": 2.66, "hyperkeratosis_score": 1.5, "mastitis_status": "HEALTHY", "valve_destination": "MAIN_TANK", "diagnostic_note": "✅ Sol Arka (Left Rear) sağlıklı. Hücre sayısı 75,403 hücre/mL, süt ana tanka akıyor."}}, "weighted_scc": 74029, "is_any_quarter_diverted": false, "teat_cup_disinfection": "Otomatik Başlık İçi Buhar Sterilizasyonu (95°C, 12 sn)", "post_dip_formula": "Standart İyotlu Bariyer Polimer Sprey", "robot_recommendation": "Tüm 4 meme lobu sağlıklı. 4 lobun sütü de doğrudan birinci sınıf ana süt tankına yönlendirildi."}, "calving": null, "pedigree": {"cow_id": "TR-34-106", "cow_name": "Nazlı", "sire_id": "US-BULL-DUKE", "sire_name": "S-S-I Montross Duke", "dam_id": "TR-06-DAM-4465", "maternal_grand_sire_id": "US-BULL-SUPER", "maternal_grand_sire_name": "Seagull-Bay Supersire", "individual_inbreeding_coeff_f_pct": 5.8, "gebv": {"net_merit_dollars": 680.0, "tpi_score": 2590, "milk_yield_gebv_kg": 510.0, "fat_gebv_kg": 35.0, "fat_gebv_pct": 0.1, "protein_gebv_kg": 26.0, "protein_gebv_pct": 0.05, "somatic_cell_score_gebv": 2.88, "productive_life_months": 3.2, "daughter_pregnancy_rate_pct": 1.0, "sire_calving_ease_pct": 2.2, "udder_composite_udc": 1.6, "feet_leg_composite_flc": 1.35}, "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}, "breeding_category": "COMMERCIAL_DAIRY"}}], "sorting_gate": {"gate_id": "GATE-01", "status": "IDLE", "last_diverted_animal_id": null, "last_reason": null, "last_updated": "2026-10-29T13:20:38.915501"}, "current_ration": {"roughage_pct": 58.0, "concentrate_pct": 40.5, "fat_supplement_pct": 1.5, "crude_protein_pct": 16.8, "neutral_detergent_fiber_pct": 33.5}, "active_ration_strategy": "BALANCED_PARETO", "sustainability": {"total_daily_methane_kg": 2.42, "total_co2e_kg": 67.76, "avg_methane_intensity": 12.5, "feed_conversion_efficiency": 1.6}, "financials": {"daily_gross_milk_revenue": 3201.0, "daily_total_feed_cost": 943.82, "daily_net_margin_over_feed": 2257.18, "monthly_feed_savings_from_optimization": 15101.1, "prevented_disease_losses_monthly": 13066.67, "prevented_estrus_losses_monthly": 16000.0, "total_monthly_net_benefit": 40567.76, "estimated_payback_period_years": 0.49, "roi_percentage_year_1": 102.8}, "edge_gateway": {"is_online": true, "connection_mode": "CLOUD_CONNECTED", "offline_buffered_packets": 0, "local_fail_safe_actuations_count": 0, "last_sync_timestamp": "2026-10-29T13:20:38.858244", "active_treatments": []}, "energy": {"timestamp": "2026-10-29T13:28:04.879892", "herd_size": 80, "manure": {"total_manure_kg_day": 4320.0, "total_solids_pct": 13.2, "volatile_solids_kg_day": 467.6, "nitrogen_content_kg": 22.5, "phosphorus_content_kg": 9.1, "potassium_content_kg": 19.4}, "digester": {"digester_id": "AD-DIGESTER-01", "digester_type": "Mezofilik Sürekli Karışımlı Tank Reaktör (CSTR)", "operating_temp_c": 38.5, "hydraulic_retention_time_days": 28, "daily_biogas_production_m3": 213.3, "methane_content_pct": 62.5, "daily_pure_methane_m3": 133.3, "biogas_lower_heating_value_kwh_m3": 6.25}, "consumption": {"milking_robot_kwh": 24.5, "milk_cooling_tank_kwh": 38.0, "ventilation_fans_misting_kwh": 7.0, "manure_scraper_lighting_kwh": 16.5, "water_pumps_office_kwh": 14.0, "total_consumption_kwh_day": 100.0}, "chp": {"chp_unit_id": "CHP-JEN-60kW", "electrical_efficiency_pct": 38.0, "thermal_efficiency_pct": 48.0, "daily_electricity_generated_kwh": 506.6, "daily_heat_generated_kwh": 639.9, "net_grid_export_kwh": 406.6, "self_sufficiency_ratio_pct": 506.6, "is_net_zero_energy": true}, "fertilizer": {"daily_digestate_tons": 4.06, "annual_chemical_fertilizer_saving_tl": 474208.0, "mineralized_nitrogen_pct": 65.0}, "daily_electricity_savings_tl": 385.0, "daily_grid_revenue_tl": 1707.72, "annual_total_energy_benefit_tl": 1238050.8, "annual_co2_offset_tons": 88.8, "status_summary": "⚡ Çiftlik Net-Zero Enerji Fazlası Üretiyor! Günlük 506.6 kWh elektrik üretildi. Çiftlik ihtiyacı (100.0 kWh) karşılandıktan sonra şebekeye 406.6 kWh temiz elektrik ihraç edildi (Öz yeterlilik: %507). Biyogübre ve elektrikle yıllık +1,238,051 TL döngüsel katma değer yaratıldı."}, "robotics": {"timestamp": "2026-10-29T13:28:04.879974", "pusher": {"robot_id": "ROBOT-PUSHER-JUNO", "name": "Juno-X Otonom Yem İtici", "robot_type": "FEED_PUSHER", "status": "PUSHING", "battery_pct": 87.7, "x_m": 23.9, "y_m": 12.5, "speed_m_sec": 0.25, "auger_rpm": 85, "feed_height_sensor_cm": 17.5, "daily_pushes_completed": 14, "dmi_boost_pct": 3.2, "milk_yield_boost_kg": 1.1, "charging_dock": {"x": 2.0, "y": 12.5}, "is_charging": false, "task_description": "Orta yem yolunda yemleri helezon devriyle ineklerin erişim mesafesine itiyor."}, "collector": {"robot_id": "ROBOT-MANURE-VAC", "name": "Discovery-Vac Gübre Toplama Robotu", "robot_type": "MANURE_VACUUM", "status": "VACUUMING", "battery_pct": 73.5, "x_m": 18.5, "y_m": 9.5, "tank_fill_pct": 44.4, "tank_capacity_liters": 350, "water_spray_active": true, "daily_manure_collected_kg": 1275.5, "lameness_reduction_pct": 28.0, "environmental_mastitis_reduction_pct": 32.0, "dump_station": {"x": 38.0, "y": 2.5}, "is_dumping": false, "task_description": "Izgara yürüyüş yolunda gübreyi vakumlayarak zemini kuru ve kaymaz tutuyor."}, "fleet_power_draw_kw": 1.65, "total_daily_energy_kwh": 12.4, "fleet_safety_status": "GÜVENLİ (Ultrasonik & UWB Çarpışma Önleme Devrede)", "fleet_economic_value_annual_tl": 259992.0, "status_summary": "🤖 Otonom Ahır Robot Filosu Aktif! Yem itici robot yem yolunda (x: 23.9m) DMI'ı %+3.2 artırıyor. Gübre vakum robotu (x: 18.5m, y: 9.5m, Tank: %44.4) topallık riskini %28 düşürerek toplanan gübreyi biyogaz reaktörüne transfer ediyor."}, "maternity": {"timestamp": "2026-10-29T13:28:04.880162", "maternity_pen_capacity": 6, "cows_in_maternity_pen": 3, "cows_in_24h_calving_window": 2, "active_labors_count": 1, "dystocia_emergencies_count": 0, "colostrum_bank_stock_liters": 42.5, "nursery_calves_count": 5, "avg_calf_vigor_score": 8.7, "calving_twins": [{"cow_id": "TR-34-106", "cow_name": "Nazlı", "gestation_days": 283, "telemetry": {"cow_id": "TR-34-106", "body_temperature_c": 37.85, "baseline_temp_c": 38.6, "temp_drop_c": 0.75, "temp_drop_detected": true, "tail_tilt_angle_deg": 48.0, "tail_raising_frequency_per_hr": 28, "rumination_drop_pct": 48.0, "restlessness_index": 0.78, "pelvic_ligament_relaxation": "FULL_RELAXATION", "teat_strutting_score": "ENGORGED_LEAKING"}, "dystocia_assessment": {"stage": "STAGE_1_CERVIX_DILATION", "stage_2_duration_minutes": 0, "calf_presentation": "NORMAL_ANTERIOR", "calving_ease_score": 1, "dystocia_risk_score": 0.15, "alert_level": "OBSERVE", "estimated_hours_to_calving": 6.0, "recommended_action": "👀 DOĞUM ELİ KULAĞINDA (6-18 SAAT): İneği doğumhane temiz altlıklı bireysel doğum bölmesine alınız. Kamera gözetimini başlatınız.", "xai_rationale": ["Vücut sıcaklığında -0.75°C belirgin düşüş tespit edildi (Progesteron P4 çekilme fazı).", "Kuyruk kalkma frekansı saatte 28 adede yükselmiş olup 1. evre servikal dilatasyon sancıları başlamıştır.", "Geviş getirme süresi %48 azalmış ve huzursuzluk indeksi 0.78'e çıkmıştır.", "Pelvis bağları tam gevşemiş ve meme kolostrum ile dolup damlamaya başlamıştır."]}, "colostrum": null, "calf": null}, {"cow_id": "TR-34-104", "cow_name": "Yıldız", "gestation_days": 279, "telemetry": {"cow_id": "TR-34-104", "body_temperature_c": 38.55, "baseline_temp_c": 38.6, "temp_drop_c": 0.05, "temp_drop_detected": false, "tail_tilt_angle_deg": 8.0, "tail_raising_frequency_per_hr": 3, "rumination_drop_pct": 5.0, "restlessness_index": 0.12, "pelvic_ligament_relaxation": "RIGID", "teat_strutting_score": "MODERATE_FILL"}, "dystocia_assessment": {"stage": "PRE_CALVING_WINDOW", "stage_2_duration_minutes": 0, "calf_presentation": "NORMAL_ANTERIOR", "calving_ease_score": 1, "dystocia_risk_score": 0.04, "alert_level": "NORMAL", "estimated_hours_to_calving": 72.0, "recommended_action": "Stabil geç gebelik takibi devam ediyor. Tahmini doğuma 3-5 gün vardır.", "xai_rationale": ["Vücut sıcaklığı 38.55°C ile bazal düzeydedir (henüz progesteron düşüşü başlamamıştır).", "Kuyruk açısı ve aktivite normal dinlenme normlarındadır.", "Pelvis çatı bağları henüz sert ve gergindir."]}, "colostrum": null, "calf": null}, {"cow_id": "TR-34-102", "cow_name": "Benekli", "gestation_days": 284, "telemetry": {"cow_id": "TR-34-102", "body_temperature_c": 38.4, "baseline_temp_c": 38.6, "temp_drop_c": 0.2, "temp_drop_detected": false, "tail_tilt_angle_deg": 12.0, "tail_raising_frequency_per_hr": 3, "rumination_drop_pct": 15.0, "restlessness_index": 0.2, "pelvic_ligament_relaxation": "MODERATE_RELAXATION", "teat_strutting_score": "MODERATE_FILL"}, "dystocia_assessment": {"stage": "POST_CALVING_STABLE", "stage_2_duration_minutes": 38, "calf_presentation": "NORMAL_ANTERIOR", "calving_ease_score": 1, "dystocia_risk_score": 0.05, "alert_level": "NORMAL", "estimated_hours_to_calving": 0.0, "recommended_action": "✅ DOĞUM BAŞARIYLA TAMAMLANDI: Kolostrum sağılmış ve buzağıya içirilmiştir. İnek ve buzağı vital parametreleri stabildir.", "xai_rationale": ["Doğum 38 dakikalık normal 2. evre ıkınma ile komplikasyonsuz gerçekleşmiştir (CES 1).", "Kolostrum optik refraktometre Brix skoru %24.5 ile üstün kalitedir (78.0 g/L IgG).", "Buzağı ilk 45 dakikada ayağa kalkmış ve APGAR Vigor skoru 9/10 ölçülmüştür."]}, "colostrum": {"cow_id": "TR-34-102", "colostrum_harvest_liters": 6.8, "brix_refractometer_pct": 24.5, "igg_concentration_g_per_l": 80.4, "quality_grade": "EXCELLENT_GREEN", "fpt_risk": "LOW_PROTECTED", "feeding_protocol": "Üstün Kalite (24.5% Brix / 80.4 g/L IgG). Doğumdan sonraki ilk 2 saat içinde 4.0 Litre biberonla içiriniz.", "colostrum_bank_action": "Sağılan toplam 6.8 L'nin 4.0 L'si buzağıya verildi; kalan 2.8 L yedek porsiyon olarak -20°C Kolostrum Bankasında dondurularak etiketlendi."}, "calf": {"calf_id": "TR-06-CALF-102", "dam_id": "TR-34-102", "sire_id": "US-BULL-ALTA-ZAREK", "birth_timestamp": "2026-10-29T10:28:04.880119", "gender": "FEMALE", "birth_weight_kg": 42.0, "vigor_apgar_score_1_10": 9, "time_to_stand_minutes": 42, "suckling_reflex": "STRONG", "colostrum_received_liters": 4.0, "serum_total_protein_g_dl": 6.2, "target_adg_kg_day": 0.88, "current_weight_kg": 42.0, "health_status": "THRIVING"}}], "status_summary": "⚠️ AKTİF DOĞUM SANCI TAKİBİ: Doğumhanede sancı çeken inekler gözlem altında."}, "genomics": {"timestamp": "2026-10-29T13:28:04.880478", "total_genotyped_cows": 6, "avg_herd_net_merit": 750.0, "avg_herd_inbreeding_pct": 5.77, "inbreeding_depression_annual_cost_tl": 86360.0, "elite_donors_count": 2, "beef_cross_candidates_count": 0, "available_catalog_bulls_count": 4, "top_herd_cow_id": "TR-34-102", "mating_matrix_recommendations": {"TR-34-101": [{"rank": 1, "bull": {"bull_id": "US-BULL-CAPTAIN", "bull_name": "DG Captain ET", "naab_code": "551HO04112", "semen_company": "Genus ABS", "price_per_dose_tl": 1850.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1140.0, "tpi_score": 3120, "milk_yield_gebv_kg": 920.0, "fat_gebv_kg": 62.0, "fat_gebv_pct": 0.22, "protein_gebv_kg": 48.0, "protein_gebv_pct": 0.14, "somatic_cell_score_gebv": 2.68, "productive_life_months": 5.4, "daughter_pregnancy_rate_pct": 1.4, "sire_calving_ease_pct": 1.6, "udder_composite_udc": 2.15, "feet_leg_composite_flc": 1.45}, "sire_id": "US-BULL-CHARL", "maternal_grand_sire_id": "US-BULL-SABER", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 930.0, "expected_progeny_milk_kg": 740.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $930 (+740 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 2, "bull": {"bull_id": "US-BULL-ZAREK", "bull_name": "AltaZarek ET", "naab_code": "011HO15640", "semen_company": "Alta Genetics", "price_per_dose_tl": 1600.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1020.0, "tpi_score": 2980, "milk_yield_gebv_kg": 810.0, "fat_gebv_kg": 54.0, "fat_gebv_pct": 0.18, "protein_gebv_kg": 42.0, "protein_gebv_pct": 0.11, "somatic_cell_score_gebv": 2.72, "productive_life_months": 4.8, "daughter_pregnancy_rate_pct": 1.9, "sire_calving_ease_pct": 1.8, "udder_composite_udc": 2.3, "feet_leg_composite_flc": 1.85}, "sire_id": "US-BULL-CASPER", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 870.0, "expected_progeny_milk_kg": 685.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $870 (+685 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 3, "bull": {"bull_id": "NL-BULL-EINSTEIN", "bull_name": "Silverridge Einstein", "naab_code": "200HO11928", "semen_company": "Semex Alliance", "price_per_dose_tl": 1450.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 940.0, "tpi_score": 2890, "milk_yield_gebv_kg": 740.0, "fat_gebv_kg": 48.0, "fat_gebv_pct": 0.15, "protein_gebv_kg": 36.0, "protein_gebv_pct": 0.08, "somatic_cell_score_gebv": 2.78, "productive_life_months": 4.2, "daughter_pregnancy_rate_pct": 2.1, "sire_calving_ease_pct": 1.7, "udder_composite_udc": 2.45, "feet_leg_composite_flc": 1.9}, "sire_id": "US-BULL-TOPNOTCH", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 830.0, "expected_progeny_milk_kg": 650.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $830 (+650 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 4, "bull": {"bull_id": "US-BULL-RENEGADE", "bull_name": "S-S-I PR Renegade", "naab_code": "007HO14454", "semen_company": "Select Sires", "price_per_dose_tl": 1700.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 980.0, "tpi_score": 2940, "milk_yield_gebv_kg": 690.0, "fat_gebv_kg": 58.0, "fat_gebv_pct": 0.24, "protein_gebv_kg": 39.0, "protein_gebv_pct": 0.12, "somatic_cell_score_gebv": 2.7, "productive_life_months": 4.5, "daughter_pregnancy_rate_pct": 1.2, "sire_calving_ease_pct": 1.9, "udder_composite_udc": 2.6, "feet_leg_composite_flc": 2.1}, "sire_id": "US-BULL-JIKEL", "maternal_grand_sire_id": "US-BULL-MOGUL", "recessives": {"hcd_cholesterol_deficiency": true, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "⚠️ HCD (Kolesterol Eksikliği) TAŞIYICISI"}}, "progeny_inbreeding_f_pct": 8.4, "inbreeding_status": "WARNING_YELLOW", "inbreeding_depression_penalty_nm": 85.0, "expected_progeny_net_merit": 765.0, "expected_progeny_milk_kg": 489.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $765 (+489 kg süt). Akrabalık Katsayısı: %8.40 (WARNING_YELLOW). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}], "TR-34-102": [{"rank": 1, "bull": {"bull_id": "US-BULL-ZAREK", "bull_name": "AltaZarek ET", "naab_code": "011HO15640", "semen_company": "Alta Genetics", "price_per_dose_tl": 1600.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1020.0, "tpi_score": 2980, "milk_yield_gebv_kg": 810.0, "fat_gebv_kg": 54.0, "fat_gebv_pct": 0.18, "protein_gebv_kg": 42.0, "protein_gebv_pct": 0.11, "somatic_cell_score_gebv": 2.72, "productive_life_months": 4.8, "daughter_pregnancy_rate_pct": 1.9, "sire_calving_ease_pct": 1.8, "udder_composite_udc": 2.3, "feet_leg_composite_flc": 1.85}, "sire_id": "US-BULL-CASPER", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 955.0, "expected_progeny_milk_kg": 795.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "SEXED_FEMALE_SEMEN", "mating_rationale": "Tahmini yavru NM$: $955 (+795 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Elit dişi verici inek: Dişi cinsiyeti ayrıştırılmış sperma (%92 düve şansı) ile damızlık yenileme önerilir."}, {"rank": 2, "bull": {"bull_id": "US-BULL-RENEGADE", "bull_name": "S-S-I PR Renegade", "naab_code": "007HO14454", "semen_company": "Select Sires", "price_per_dose_tl": 1700.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 980.0, "tpi_score": 2940, "milk_yield_gebv_kg": 690.0, "fat_gebv_kg": 58.0, "fat_gebv_pct": 0.24, "protein_gebv_kg": 39.0, "protein_gebv_pct": 0.12, "somatic_cell_score_gebv": 2.7, "productive_life_months": 4.5, "daughter_pregnancy_rate_pct": 1.2, "sire_calving_ease_pct": 1.9, "udder_composite_udc": 2.6, "feet_leg_composite_flc": 2.1}, "sire_id": "US-BULL-JIKEL", "maternal_grand_sire_id": "US-BULL-MOGUL", "recessives": {"hcd_cholesterol_deficiency": true, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "⚠️ HCD (Kolesterol Eksikliği) TAŞIYICISI"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 935.0, "expected_progeny_milk_kg": 735.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "SEXED_FEMALE_SEMEN", "mating_rationale": "Tahmini yavru NM$: $935 (+735 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Elit dişi verici inek: Dişi cinsiyeti ayrıştırılmış sperma (%92 düve şansı) ile damızlık yenileme önerilir."}, {"rank": 3, "bull": {"bull_id": "NL-BULL-EINSTEIN", "bull_name": "Silverridge Einstein", "naab_code": "200HO11928", "semen_company": "Semex Alliance", "price_per_dose_tl": 1450.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 940.0, "tpi_score": 2890, "milk_yield_gebv_kg": 740.0, "fat_gebv_kg": 48.0, "fat_gebv_pct": 0.15, "protein_gebv_kg": 36.0, "protein_gebv_pct": 0.08, "somatic_cell_score_gebv": 2.78, "productive_life_months": 4.2, "daughter_pregnancy_rate_pct": 2.1, "sire_calving_ease_pct": 1.7, "udder_composite_udc": 2.45, "feet_leg_composite_flc": 1.9}, "sire_id": "US-BULL-TOPNOTCH", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 915.0, "expected_progeny_milk_kg": 760.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "SEXED_FEMALE_SEMEN", "mating_rationale": "Tahmini yavru NM$: $915 (+760 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Elit dişi verici inek: Dişi cinsiyeti ayrıştırılmış sperma (%92 düve şansı) ile damızlık yenileme önerilir."}, {"rank": 4, "bull": {"bull_id": "US-BULL-CAPTAIN", "bull_name": "DG Captain ET", "naab_code": "551HO04112", "semen_company": "Genus ABS", "price_per_dose_tl": 1850.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1140.0, "tpi_score": 3120, "milk_yield_gebv_kg": 920.0, "fat_gebv_kg": 62.0, "fat_gebv_pct": 0.22, "protein_gebv_kg": 48.0, "protein_gebv_pct": 0.14, "somatic_cell_score_gebv": 2.68, "productive_life_months": 5.4, "daughter_pregnancy_rate_pct": 1.4, "sire_calving_ease_pct": 1.6, "udder_composite_udc": 2.15, "feet_leg_composite_flc": 1.45}, "sire_id": "US-BULL-CHARL", "maternal_grand_sire_id": "US-BULL-SABER", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 11.7, "inbreeding_status": "FORBIDDEN_RED", "inbreeding_depression_penalty_nm": 167.5, "expected_progeny_net_merit": 847.5, "expected_progeny_milk_kg": 582.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "BEEF_ON_DAIRY", "mating_rationale": "Tahmini yavru NM$: $848 (+582 kg süt). Akrabalık Katsayısı: %11.70 (FORBIDDEN_RED). Çiftleştirme yasaklandı: Yüksek akrabalık katsayısı (%9.0 üzeri)!"}], "TR-34-103": [{"rank": 1, "bull": {"bull_id": "US-BULL-ZAREK", "bull_name": "AltaZarek ET", "naab_code": "011HO15640", "semen_company": "Alta Genetics", "price_per_dose_tl": 1600.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1020.0, "tpi_score": 2980, "milk_yield_gebv_kg": 810.0, "fat_gebv_kg": 54.0, "fat_gebv_pct": 0.18, "protein_gebv_kg": 42.0, "protein_gebv_pct": 0.11, "somatic_cell_score_gebv": 2.72, "productive_life_months": 4.8, "daughter_pregnancy_rate_pct": 1.9, "sire_calving_ease_pct": 1.8, "udder_composite_udc": 2.3, "feet_leg_composite_flc": 1.85}, "sire_id": "US-BULL-CASPER", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 815.0, "expected_progeny_milk_kg": 625.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $815 (+625 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 2, "bull": {"bull_id": "NL-BULL-EINSTEIN", "bull_name": "Silverridge Einstein", "naab_code": "200HO11928", "semen_company": "Semex Alliance", "price_per_dose_tl": 1450.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 940.0, "tpi_score": 2890, "milk_yield_gebv_kg": 740.0, "fat_gebv_kg": 48.0, "fat_gebv_pct": 0.15, "protein_gebv_kg": 36.0, "protein_gebv_pct": 0.08, "somatic_cell_score_gebv": 2.78, "productive_life_months": 4.2, "daughter_pregnancy_rate_pct": 2.1, "sire_calving_ease_pct": 1.7, "udder_composite_udc": 2.45, "feet_leg_composite_flc": 1.9}, "sire_id": "US-BULL-TOPNOTCH", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 775.0, "expected_progeny_milk_kg": 590.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $775 (+590 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 3, "bull": {"bull_id": "US-BULL-CAPTAIN", "bull_name": "DG Captain ET", "naab_code": "551HO04112", "semen_company": "Genus ABS", "price_per_dose_tl": 1850.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1140.0, "tpi_score": 3120, "milk_yield_gebv_kg": 920.0, "fat_gebv_kg": 62.0, "fat_gebv_pct": 0.22, "protein_gebv_kg": 48.0, "protein_gebv_pct": 0.14, "somatic_cell_score_gebv": 2.68, "productive_life_months": 5.4, "daughter_pregnancy_rate_pct": 1.4, "sire_calving_ease_pct": 1.6, "udder_composite_udc": 2.15, "feet_leg_composite_flc": 1.45}, "sire_id": "US-BULL-CHARL", "maternal_grand_sire_id": "US-BULL-SABER", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 8.4, "inbreeding_status": "WARNING_YELLOW", "inbreeding_depression_penalty_nm": 85.0, "expected_progeny_net_merit": 790.0, "expected_progeny_milk_kg": 544.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $790 (+544 kg süt). Akrabalık Katsayısı: %8.40 (WARNING_YELLOW). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 4, "bull": {"bull_id": "US-BULL-RENEGADE", "bull_name": "S-S-I PR Renegade", "naab_code": "007HO14454", "semen_company": "Select Sires", "price_per_dose_tl": 1700.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 980.0, "tpi_score": 2940, "milk_yield_gebv_kg": 690.0, "fat_gebv_kg": 58.0, "fat_gebv_pct": 0.24, "protein_gebv_kg": 39.0, "protein_gebv_pct": 0.12, "somatic_cell_score_gebv": 2.7, "productive_life_months": 4.5, "daughter_pregnancy_rate_pct": 1.2, "sire_calving_ease_pct": 1.9, "udder_composite_udc": 2.6, "feet_leg_composite_flc": 2.1}, "sire_id": "US-BULL-JIKEL", "maternal_grand_sire_id": "US-BULL-MOGUL", "recessives": {"hcd_cholesterol_deficiency": true, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "⚠️ HCD (Kolesterol Eksikliği) TAŞIYICISI"}}, "progeny_inbreeding_f_pct": 8.7, "inbreeding_status": "WARNING_YELLOW", "inbreeding_depression_penalty_nm": 92.5, "expected_progeny_net_merit": 702.5, "expected_progeny_milk_kg": 417.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $702 (+417 kg süt). Akrabalık Katsayısı: %8.70 (WARNING_YELLOW). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}], "TR-34-104": [{"rank": 1, "bull": {"bull_id": "US-BULL-CAPTAIN", "bull_name": "DG Captain ET", "naab_code": "551HO04112", "semen_company": "Genus ABS", "price_per_dose_tl": 1850.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1140.0, "tpi_score": 3120, "milk_yield_gebv_kg": 920.0, "fat_gebv_kg": 62.0, "fat_gebv_pct": 0.22, "protein_gebv_kg": 48.0, "protein_gebv_pct": 0.14, "somatic_cell_score_gebv": 2.68, "productive_life_months": 5.4, "daughter_pregnancy_rate_pct": 1.4, "sire_calving_ease_pct": 1.6, "udder_composite_udc": 2.15, "feet_leg_composite_flc": 1.45}, "sire_id": "US-BULL-CHARL", "maternal_grand_sire_id": "US-BULL-SABER", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 950.0, "expected_progeny_milk_kg": 770.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $950 (+770 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 2, "bull": {"bull_id": "NL-BULL-EINSTEIN", "bull_name": "Silverridge Einstein", "naab_code": "200HO11928", "semen_company": "Semex Alliance", "price_per_dose_tl": 1450.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 940.0, "tpi_score": 2890, "milk_yield_gebv_kg": 740.0, "fat_gebv_kg": 48.0, "fat_gebv_pct": 0.15, "protein_gebv_kg": 36.0, "protein_gebv_pct": 0.08, "somatic_cell_score_gebv": 2.78, "productive_life_months": 4.2, "daughter_pregnancy_rate_pct": 2.1, "sire_calving_ease_pct": 1.7, "udder_composite_udc": 2.45, "feet_leg_composite_flc": 1.9}, "sire_id": "US-BULL-TOPNOTCH", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 850.0, "expected_progeny_milk_kg": 680.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $850 (+680 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 3, "bull": {"bull_id": "US-BULL-RENEGADE", "bull_name": "S-S-I PR Renegade", "naab_code": "007HO14454", "semen_company": "Select Sires", "price_per_dose_tl": 1700.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 980.0, "tpi_score": 2940, "milk_yield_gebv_kg": 690.0, "fat_gebv_kg": 58.0, "fat_gebv_pct": 0.24, "protein_gebv_kg": 39.0, "protein_gebv_pct": 0.12, "somatic_cell_score_gebv": 2.7, "productive_life_months": 4.5, "daughter_pregnancy_rate_pct": 1.2, "sire_calving_ease_pct": 1.9, "udder_composite_udc": 2.6, "feet_leg_composite_flc": 2.1}, "sire_id": "US-BULL-JIKEL", "maternal_grand_sire_id": "US-BULL-MOGUL", "recessives": {"hcd_cholesterol_deficiency": true, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "⚠️ HCD (Kolesterol Eksikliği) TAŞIYICISI"}}, "progeny_inbreeding_f_pct": 6.7, "inbreeding_status": "FORBIDDEN_RED", "inbreeding_depression_penalty_nm": 42.5, "expected_progeny_net_merit": 827.5, "expected_progeny_milk_kg": 587.0, "recessive_conflict": true, "conflict_details": "HCD (Kolesterol Eksikliği) ölümcül resesif çakışması! Her iki ebeveyn de taşıyıcıdır (%25 embriyo ölümü).", "recommendation_type": "BEEF_ON_DAIRY", "mating_rationale": "Tahmini yavru NM$: $828 (+587 kg süt). Akrabalık Katsayısı: %6.70 (FORBIDDEN_RED). Çiftleştirme yasaklandı: HCD (Kolesterol Eksikliği) ölümcül resesif çakışması! Her iki ebeveyn de taşıyıcıdır (%25 embriyo ölümü)."}, {"rank": 4, "bull": {"bull_id": "US-BULL-ZAREK", "bull_name": "AltaZarek ET", "naab_code": "011HO15640", "semen_company": "Alta Genetics", "price_per_dose_tl": 1600.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1020.0, "tpi_score": 2980, "milk_yield_gebv_kg": 810.0, "fat_gebv_kg": 54.0, "fat_gebv_pct": 0.18, "protein_gebv_kg": 42.0, "protein_gebv_pct": 0.11, "somatic_cell_score_gebv": 2.72, "productive_life_months": 4.8, "daughter_pregnancy_rate_pct": 1.9, "sire_calving_ease_pct": 1.8, "udder_composite_udc": 2.3, "feet_leg_composite_flc": 1.85}, "sire_id": "US-BULL-CASPER", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 11.7, "inbreeding_status": "FORBIDDEN_RED", "inbreeding_depression_penalty_nm": 167.5, "expected_progeny_net_merit": 722.5, "expected_progeny_milk_kg": 447.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "BEEF_ON_DAIRY", "mating_rationale": "Tahmini yavru NM$: $722 (+447 kg süt). Akrabalık Katsayısı: %11.70 (FORBIDDEN_RED). Çiftleştirme yasaklandı: Yüksek akrabalık katsayısı (%9.0 üzeri)!"}], "TR-34-105": [{"rank": 1, "bull": {"bull_id": "US-BULL-CAPTAIN", "bull_name": "DG Captain ET", "naab_code": "551HO04112", "semen_company": "Genus ABS", "price_per_dose_tl": 1850.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1140.0, "tpi_score": 3120, "milk_yield_gebv_kg": 920.0, "fat_gebv_kg": 62.0, "fat_gebv_pct": 0.22, "protein_gebv_kg": 48.0, "protein_gebv_pct": 0.14, "somatic_cell_score_gebv": 2.68, "productive_life_months": 5.4, "daughter_pregnancy_rate_pct": 1.4, "sire_calving_ease_pct": 1.6, "udder_composite_udc": 2.15, "feet_leg_composite_flc": 1.45}, "sire_id": "US-BULL-CHARL", "maternal_grand_sire_id": "US-BULL-SABER", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 990.0, "expected_progeny_milk_kg": 815.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "SEXED_FEMALE_SEMEN", "mating_rationale": "Tahmini yavru NM$: $990 (+815 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Elit dişi verici inek: Dişi cinsiyeti ayrıştırılmış sperma (%92 düve şansı) ile damızlık yenileme önerilir."}, {"rank": 2, "bull": {"bull_id": "US-BULL-ZAREK", "bull_name": "AltaZarek ET", "naab_code": "011HO15640", "semen_company": "Alta Genetics", "price_per_dose_tl": 1600.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1020.0, "tpi_score": 2980, "milk_yield_gebv_kg": 810.0, "fat_gebv_kg": 54.0, "fat_gebv_pct": 0.18, "protein_gebv_kg": 42.0, "protein_gebv_pct": 0.11, "somatic_cell_score_gebv": 2.72, "productive_life_months": 4.8, "daughter_pregnancy_rate_pct": 1.9, "sire_calving_ease_pct": 1.8, "udder_composite_udc": 2.3, "feet_leg_composite_flc": 1.85}, "sire_id": "US-BULL-CASPER", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 930.0, "expected_progeny_milk_kg": 760.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "SEXED_FEMALE_SEMEN", "mating_rationale": "Tahmini yavru NM$: $930 (+760 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Elit dişi verici inek: Dişi cinsiyeti ayrıştırılmış sperma (%92 düve şansı) ile damızlık yenileme önerilir."}, {"rank": 3, "bull": {"bull_id": "US-BULL-RENEGADE", "bull_name": "S-S-I PR Renegade", "naab_code": "007HO14454", "semen_company": "Select Sires", "price_per_dose_tl": 1700.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 980.0, "tpi_score": 2940, "milk_yield_gebv_kg": 690.0, "fat_gebv_kg": 58.0, "fat_gebv_pct": 0.24, "protein_gebv_kg": 39.0, "protein_gebv_pct": 0.12, "somatic_cell_score_gebv": 2.7, "productive_life_months": 4.5, "daughter_pregnancy_rate_pct": 1.2, "sire_calving_ease_pct": 1.9, "udder_composite_udc": 2.6, "feet_leg_composite_flc": 2.1}, "sire_id": "US-BULL-JIKEL", "maternal_grand_sire_id": "US-BULL-MOGUL", "recessives": {"hcd_cholesterol_deficiency": true, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "⚠️ HCD (Kolesterol Eksikliği) TAŞIYICISI"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 910.0, "expected_progeny_milk_kg": 700.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "SEXED_FEMALE_SEMEN", "mating_rationale": "Tahmini yavru NM$: $910 (+700 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Elit dişi verici inek: Dişi cinsiyeti ayrıştırılmış sperma (%92 düve şansı) ile damızlık yenileme önerilir."}, {"rank": 4, "bull": {"bull_id": "NL-BULL-EINSTEIN", "bull_name": "Silverridge Einstein", "naab_code": "200HO11928", "semen_company": "Semex Alliance", "price_per_dose_tl": 1450.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 940.0, "tpi_score": 2890, "milk_yield_gebv_kg": 740.0, "fat_gebv_kg": 48.0, "fat_gebv_pct": 0.15, "protein_gebv_kg": 36.0, "protein_gebv_pct": 0.08, "somatic_cell_score_gebv": 2.78, "productive_life_months": 4.2, "daughter_pregnancy_rate_pct": 2.1, "sire_calving_ease_pct": 1.7, "udder_composite_udc": 2.45, "feet_leg_composite_flc": 1.9}, "sire_id": "US-BULL-TOPNOTCH", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 11.7, "inbreeding_status": "FORBIDDEN_RED", "inbreeding_depression_penalty_nm": 167.5, "expected_progeny_net_merit": 722.5, "expected_progeny_milk_kg": 457.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "BEEF_ON_DAIRY", "mating_rationale": "Tahmini yavru NM$: $722 (+457 kg süt). Akrabalık Katsayısı: %11.70 (FORBIDDEN_RED). Çiftleştirme yasaklandı: Yüksek akrabalık katsayısı (%9.0 üzeri)!"}], "TR-34-106": [{"rank": 1, "bull": {"bull_id": "US-BULL-CAPTAIN", "bull_name": "DG Captain ET", "naab_code": "551HO04112", "semen_company": "Genus ABS", "price_per_dose_tl": 1850.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1140.0, "tpi_score": 3120, "milk_yield_gebv_kg": 920.0, "fat_gebv_kg": 62.0, "fat_gebv_pct": 0.22, "protein_gebv_kg": 48.0, "protein_gebv_pct": 0.14, "somatic_cell_score_gebv": 2.68, "productive_life_months": 5.4, "daughter_pregnancy_rate_pct": 1.4, "sire_calving_ease_pct": 1.6, "udder_composite_udc": 2.15, "feet_leg_composite_flc": 1.45}, "sire_id": "US-BULL-CHARL", "maternal_grand_sire_id": "US-BULL-SABER", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 910.0, "expected_progeny_milk_kg": 715.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $910 (+715 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 2, "bull": {"bull_id": "US-BULL-RENEGADE", "bull_name": "S-S-I PR Renegade", "naab_code": "007HO14454", "semen_company": "Select Sires", "price_per_dose_tl": 1700.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 980.0, "tpi_score": 2940, "milk_yield_gebv_kg": 690.0, "fat_gebv_kg": 58.0, "fat_gebv_pct": 0.24, "protein_gebv_kg": 39.0, "protein_gebv_pct": 0.12, "somatic_cell_score_gebv": 2.7, "productive_life_months": 4.5, "daughter_pregnancy_rate_pct": 1.2, "sire_calving_ease_pct": 1.9, "udder_composite_udc": 2.6, "feet_leg_composite_flc": 2.1}, "sire_id": "US-BULL-JIKEL", "maternal_grand_sire_id": "US-BULL-MOGUL", "recessives": {"hcd_cholesterol_deficiency": true, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "⚠️ HCD (Kolesterol Eksikliği) TAŞIYICISI"}}, "progeny_inbreeding_f_pct": 4.2, "inbreeding_status": "SAFE_GREEN", "inbreeding_depression_penalty_nm": 0.0, "expected_progeny_net_merit": 830.0, "expected_progeny_milk_kg": 600.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $830 (+600 kg süt). Akrabalık Katsayısı: %4.20 (SAFE_GREEN). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 3, "bull": {"bull_id": "US-BULL-ZAREK", "bull_name": "AltaZarek ET", "naab_code": "011HO15640", "semen_company": "Alta Genetics", "price_per_dose_tl": 1600.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 1020.0, "tpi_score": 2980, "milk_yield_gebv_kg": 810.0, "fat_gebv_kg": 54.0, "fat_gebv_pct": 0.18, "protein_gebv_kg": 42.0, "protein_gebv_pct": 0.11, "somatic_cell_score_gebv": 2.72, "productive_life_months": 4.8, "daughter_pregnancy_rate_pct": 1.9, "sire_calving_ease_pct": 1.8, "udder_composite_udc": 2.3, "feet_leg_composite_flc": 1.85}, "sire_id": "US-BULL-CASPER", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 8.4, "inbreeding_status": "WARNING_YELLOW", "inbreeding_depression_penalty_nm": 85.0, "expected_progeny_net_merit": 765.0, "expected_progeny_milk_kg": 524.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $765 (+524 kg süt). Akrabalık Katsayısı: %8.40 (WARNING_YELLOW). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}, {"rank": 4, "bull": {"bull_id": "NL-BULL-EINSTEIN", "bull_name": "Silverridge Einstein", "naab_code": "200HO11928", "semen_company": "Semex Alliance", "price_per_dose_tl": 1450.0, "is_sexed_available": true, "gebv": {"net_merit_dollars": 940.0, "tpi_score": 2890, "milk_yield_gebv_kg": 740.0, "fat_gebv_kg": 48.0, "fat_gebv_pct": 0.15, "protein_gebv_kg": 36.0, "protein_gebv_pct": 0.08, "somatic_cell_score_gebv": 2.78, "productive_life_months": 4.2, "daughter_pregnancy_rate_pct": 2.1, "sire_calving_ease_pct": 1.7, "udder_composite_udc": 2.45, "feet_leg_composite_flc": 1.9}, "sire_id": "US-BULL-TOPNOTCH", "maternal_grand_sire_id": "US-BULL-DUKE", "recessives": {"hcd_cholesterol_deficiency": false, "cvm_complex_vertebral_malformation": false, "brachyspina_by": false, "hh1_haplotype": false, "hh2_haplotype": false, "hh3_haplotype": false, "hh4_haplotype": false, "hh5_haplotype": false, "carrier_summary": "TEMİZ"}}, "progeny_inbreeding_f_pct": 8.4, "inbreeding_status": "WARNING_YELLOW", "inbreeding_depression_penalty_nm": 85.0, "expected_progeny_net_merit": 725.0, "expected_progeny_milk_kg": 489.0, "recessive_conflict": false, "conflict_details": null, "recommendation_type": "CONVENTIONAL", "mating_rationale": "Tahmini yavru NM$: $725 (+489 kg süt). Akrabalık Katsayısı: %8.40 (WARNING_YELLOW). Ticari süt grubu: Konvansiyonel yüksek Net Merit boğa kullanımı uygundur."}]}, "status_summary": "🧬 Sürü ortalama genomik Net Merit seviyesi $750 NM$ düzeyindedir. Ortalama inbreeding %5.77 olup %6.25 güvenli eşiğin altındadır. Sürüde 2 baş elit genomik dişi tespit edilmiş olup dişi sperma ile nesil yenileme planlanmaktadır."}};
const GITHUB_PAGES_FALLBACK_GRID = {"width_m": 40.0, "height_m": 25.0, "cells": [{"x_idx": 0, "y_idx": 0, "center_x_m": 2.5, "center_y_m": 2.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 1, "y_idx": 0, "center_x_m": 7.5, "center_y_m": 2.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 2, "y_idx": 0, "center_x_m": 12.5, "center_y_m": 2.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 3, "y_idx": 0, "center_x_m": 17.5, "center_y_m": 2.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 4, "y_idx": 0, "center_x_m": 22.5, "center_y_m": 2.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 5, "y_idx": 0, "center_x_m": 27.5, "center_y_m": 2.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 6, "y_idx": 0, "center_x_m": 32.5, "center_y_m": 2.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 7, "y_idx": 0, "center_x_m": 37.5, "center_y_m": 2.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 0, "y_idx": 1, "center_x_m": 2.5, "center_y_m": 7.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 1, "y_idx": 1, "center_x_m": 7.5, "center_y_m": 7.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 2, "y_idx": 1, "center_x_m": 12.5, "center_y_m": 7.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 3, "y_idx": 1, "center_x_m": 17.5, "center_y_m": 7.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 4, "y_idx": 1, "center_x_m": 22.5, "center_y_m": 7.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 5, "y_idx": 1, "center_x_m": 27.5, "center_y_m": 7.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 6, "y_idx": 1, "center_x_m": 32.5, "center_y_m": 7.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 7, "y_idx": 1, "center_x_m": 37.5, "center_y_m": 7.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 0, "y_idx": 2, "center_x_m": 2.5, "center_y_m": 12.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 1, "y_idx": 2, "center_x_m": 7.5, "center_y_m": 12.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 2, "y_idx": 2, "center_x_m": 12.5, "center_y_m": 12.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 3, "y_idx": 2, "center_x_m": 17.5, "center_y_m": 12.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 4, "y_idx": 2, "center_x_m": 22.5, "center_y_m": 12.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 5, "y_idx": 2, "center_x_m": 27.5, "center_y_m": 12.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 6, "y_idx": 2, "center_x_m": 32.5, "center_y_m": 12.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 7, "y_idx": 2, "center_x_m": 37.5, "center_y_m": 12.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 0, "y_idx": 3, "center_x_m": 2.5, "center_y_m": 17.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 1, "y_idx": 3, "center_x_m": 7.5, "center_y_m": 17.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 2, "y_idx": 3, "center_x_m": 12.5, "center_y_m": 17.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 3, "y_idx": 3, "center_x_m": 17.5, "center_y_m": 17.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 4, "y_idx": 3, "center_x_m": 22.5, "center_y_m": 17.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 5, "y_idx": 3, "center_x_m": 27.5, "center_y_m": 17.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 6, "y_idx": 3, "center_x_m": 32.5, "center_y_m": 17.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 7, "y_idx": 3, "center_x_m": 37.5, "center_y_m": 17.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 0, "y_idx": 4, "center_x_m": 2.5, "center_y_m": 22.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 1, "y_idx": 4, "center_x_m": 7.5, "center_y_m": 22.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 2, "y_idx": 4, "center_x_m": 12.5, "center_y_m": 22.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 3, "y_idx": 4, "center_x_m": 17.5, "center_y_m": 22.5, "temperature_c": 22.5, "relative_humidity_pct": 58.0, "thi_index": 69.2, "fan_influence": false}, {"x_idx": 4, "y_idx": 4, "center_x_m": 22.5, "center_y_m": 22.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 5, "y_idx": 4, "center_x_m": 27.5, "center_y_m": 22.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 6, "y_idx": 4, "center_x_m": 32.5, "center_y_m": 22.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}, {"x_idx": 7, "y_idx": 4, "center_x_m": 37.5, "center_y_m": 22.5, "temperature_c": 23.0, "relative_humidity_pct": 58.0, "thi_index": 69.8, "fan_influence": false}], "positions": [{"animal_id": "TR-34-101", "name": "Sarıkız", "x_m": 8.8, "y_m": 13.6, "health_status": "HEALTHY", "is_seeking_cooling": false}, {"animal_id": "TR-34-102", "name": "Benekli", "x_m": 11.6, "y_m": 8.2, "health_status": "HEALTHY", "is_seeking_cooling": false}, {"animal_id": "TR-34-103", "name": "Papatya", "x_m": 6.5, "y_m": 18.4, "health_status": "HEALTHY", "is_seeking_cooling": false}, {"animal_id": "TR-34-104", "name": "Yıldız", "x_m": 27.7, "y_m": 9.7, "health_status": "HEALTHY", "is_seeking_cooling": false}, {"animal_id": "TR-34-105", "name": "Elif", "x_m": 32.0, "y_m": 16.6, "health_status": "HEALTHY", "is_seeking_cooling": false}, {"animal_id": "TR-34-106", "name": "Nazlı", "x_m": 35.3, "y_m": 7.6, "health_status": "HEALTHY", "is_seeking_cooling": false}], "fans": [{"id": "FAN-A", "x": 10.0, "y": 12.5, "active": false}, {"id": "FAN-B", "x": 30.0, "y": 12.5, "active": false}]};
const GITHUB_PAGES_FALLBACK_RATION = {"baseline_strategy": "MAX_PROFIT", "recommended_strategy": "BALANCED_PARETO", "plans": [{"strategy_id": "MAX_PROFIT", "strategy_title": "Maksimum Kâr (En Düşük Maliyet)", "strategy_badge": "💰 MAKSİMUM IOFC", "description": "Mısır silajı ve yerel tahıl ağırlıklı, düşük birim maliyetli ekonomik rasyon.", "ingredients": [{"ingredient_id": "CORN_SILAGE", "name": "Mısır Silajı (Yüksek Kalite)", "kg_dm_per_cow_day": 8.8, "percentage_of_diet": 39.6, "daily_cost_tl": 29.92}, {"ingredient_id": "ALFALFA_HAY", "name": "Yonca Kuru Otu (Çiçeklenme Öncesi)", "kg_dm_per_cow_day": 3.8, "percentage_of_diet": 17.1, "daily_cost_tl": 30.02}, {"ingredient_id": "BARLEY_GRAIN", "name": "Ezme Arpa / Mısır Tanesi", "kg_dm_per_cow_day": 5.2, "percentage_of_diet": 23.4, "daily_cost_tl": 49.92}, {"ingredient_id": "SOYBEAN_MEAL", "name": "Soya Küspesi (%48 HP)", "kg_dm_per_cow_day": 2.6, "percentage_of_diet": 11.7, "daily_cost_tl": 46.28}, {"ingredient_id": "WHEAT_BRAN", "name": "Buğday Kepeği / Pamuk Küspesi", "kg_dm_per_cow_day": 1.6, "percentage_of_diet": 7.2, "daily_cost_tl": 11.52}, {"ingredient_id": "BOVAER_3NOP_LIPID", "name": "3-NOP (Bovaer) & Korunmuş Yağ Kompleksi", "kg_dm_per_cow_day": 0.0, "percentage_of_diet": 0.0, "daily_cost_tl": 0.0}, {"ingredient_id": "SODIUM_BICARBONATE", "name": "Sodyum Bikarbonat Rumen Tamponu", "kg_dm_per_cow_day": 0.2, "percentage_of_diet": 0.9, "daily_cost_tl": 2.9}], "total_dmi_kg": 22.2, "daily_feed_cost_per_cow": 170.56, "roughage_pct": 56.8, "concentrate_pct": 43.2, "crude_protein_pct": 16.1, "ndf_pct": 31.8, "starch_pct": 28.8, "nel_density_mcal_kg": 1.67, "predicted_milk_yield_kg": 31.2, "daily_gross_revenue_per_cow": 514.8, "daily_iofc_per_cow": 344.24, "enteric_methane_g_day": 382.2, "methane_intensity_g_per_kg": 12.25, "carbon_reduction_pct": 2.0, "carbon_credit_annual_savings_tl": 4145.23, "sara_safety_index": "ORTA RİSK (%28.5 NDF)", "is_active": false}, {"strategy_id": "ECO_LOW_METHANE", "strategy_title": "Ekolojik Yeşil Rasyon (Düşük Karbon & 3-NOP)", "strategy_badge": "🌿 DÜŞÜK METAN (-%32)", "description": "Bovaer (3-NOP) ve korunmuş yağ kompleksi ile metanojen arkeleri baskılayan iklim dostu rasyon.", "ingredients": [{"ingredient_id": "CORN_SILAGE", "name": "Mısır Silajı (Yüksek Kalite)", "kg_dm_per_cow_day": 6.8, "percentage_of_diet": 30.1, "daily_cost_tl": 23.12}, {"ingredient_id": "ALFALFA_HAY", "name": "Yonca Kuru Otu (Çiçeklenme Öncesi)", "kg_dm_per_cow_day": 5.6, "percentage_of_diet": 24.8, "daily_cost_tl": 44.24}, {"ingredient_id": "BARLEY_GRAIN", "name": "Ezme Arpa / Mısır Tanesi", "kg_dm_per_cow_day": 4.2, "percentage_of_diet": 18.6, "daily_cost_tl": 40.32}, {"ingredient_id": "SOYBEAN_MEAL", "name": "Soya Küspesi (%48 HP)", "kg_dm_per_cow_day": 3.2, "percentage_of_diet": 14.2, "daily_cost_tl": 56.96}, {"ingredient_id": "WHEAT_BRAN", "name": "Buğday Kepeği / Pamuk Küspesi", "kg_dm_per_cow_day": 1.8, "percentage_of_diet": 8.0, "daily_cost_tl": 12.96}, {"ingredient_id": "BOVAER_3NOP_LIPID", "name": "3-NOP (Bovaer) & Korunmuş Yağ Kompleksi", "kg_dm_per_cow_day": 0.7, "percentage_of_diet": 3.1, "daily_cost_tl": 27.3}, {"ingredient_id": "SODIUM_BICARBONATE", "name": "Sodyum Bikarbonat Rumen Tamponu", "kg_dm_per_cow_day": 0.3, "percentage_of_diet": 1.3, "daily_cost_tl": 4.35}], "total_dmi_kg": 22.6, "daily_feed_cost_per_cow": 209.25, "roughage_pct": 54.9, "concentrate_pct": 45.1, "crude_protein_pct": 17.5, "ndf_pct": 30.6, "starch_pct": 23.4, "nel_density_mcal_kg": 1.75, "predicted_milk_yield_kg": 32.4, "daily_gross_revenue_per_cow": 534.6, "daily_iofc_per_cow": 325.35, "enteric_methane_g_day": 263.2, "methane_intensity_g_per_kg": 8.12, "carbon_reduction_pct": 32.5, "carbon_credit_annual_savings_tl": 67386.59, "sara_safety_index": "GÜVENLİ (%33.8 NDF)", "is_active": false}, {"strategy_id": "BALANCED_PARETO", "strategy_title": "Dengeli Pareto (SARA Korumalı & Optimum Kâr)", "strategy_badge": "⚖️ PARETO OPTİMUM", "description": "SARA asidozunu tam tamponlayan, %18.5 metan tasarrufu sağlayan ve çiftlik kârını maksimize eden altın oran.", "ingredients": [{"ingredient_id": "CORN_SILAGE", "name": "Mısır Silajı (Yüksek Kalite)", "kg_dm_per_cow_day": 7.8, "percentage_of_diet": 34.2, "daily_cost_tl": 26.52}, {"ingredient_id": "ALFALFA_HAY", "name": "Yonca Kuru Otu (Çiçeklenme Öncesi)", "kg_dm_per_cow_day": 4.8, "percentage_of_diet": 21.1, "daily_cost_tl": 37.92}, {"ingredient_id": "BARLEY_GRAIN", "name": "Ezme Arpa / Mısır Tanesi", "kg_dm_per_cow_day": 4.8, "percentage_of_diet": 21.1, "daily_cost_tl": 46.08}, {"ingredient_id": "SOYBEAN_MEAL", "name": "Soya Küspesi (%48 HP)", "kg_dm_per_cow_day": 2.9, "percentage_of_diet": 12.7, "daily_cost_tl": 51.62}, {"ingredient_id": "WHEAT_BRAN", "name": "Buğday Kepeği / Pamuk Küspesi", "kg_dm_per_cow_day": 1.8, "percentage_of_diet": 7.9, "daily_cost_tl": 12.96}, {"ingredient_id": "BOVAER_3NOP_LIPID", "name": "3-NOP (Bovaer) & Korunmuş Yağ Kompleksi", "kg_dm_per_cow_day": 0.3, "percentage_of_diet": 1.3, "daily_cost_tl": 11.7}, {"ingredient_id": "SODIUM_BICARBONATE", "name": "Sodyum Bikarbonat Rumen Tamponu", "kg_dm_per_cow_day": 0.4, "percentage_of_diet": 1.8, "daily_cost_tl": 5.8}], "total_dmi_kg": 22.8, "daily_feed_cost_per_cow": 192.6, "roughage_pct": 55.3, "concentrate_pct": 44.7, "crude_protein_pct": 16.7, "ndf_pct": 31.1, "starch_pct": 26.0, "nel_density_mcal_kg": 1.69, "predicted_milk_yield_kg": 33.1, "daily_gross_revenue_per_cow": 546.15, "daily_iofc_per_cow": 353.55, "enteric_methane_g_day": 317.8, "methane_intensity_g_per_kg": 9.6, "carbon_reduction_pct": 18.5, "carbon_credit_annual_savings_tl": 38369.97, "sara_safety_index": "YÜKSEK GÜVENLİK (pH > 6.35)", "is_active": true}], "pareto_frontier": [{"strategy_id": "MAX_PROFIT", "name": "Maksimum Kâr (En Düşük Maliyet)", "cost_tl_kg_dm": 7.68, "methane_intensity_g_kg_milk": 12.25, "iofc_tl_day": 344.24}, {"strategy_id": "ECO_LOW_METHANE", "name": "Ekolojik Yeşil Rasyon (Düşük Karbon & 3-NOP)", "cost_tl_kg_dm": 9.26, "methane_intensity_g_kg_milk": 8.12, "iofc_tl_day": 325.35}, {"strategy_id": "BALANCED_PARETO", "name": "Dengeli Pareto (SARA Korumalı & Optimum Kâr)", "cost_tl_kg_dm": 8.45, "methane_intensity_g_kg_milk": 9.6, "iofc_tl_day": 353.55}], "herd_annual_profit_delta_tl": 310221.97, "herd_annual_co2e_reduction_kg": 52653.4};
let isClientSideFallback = false;
let clientSimState = JSON.parse(JSON.stringify(GITHUB_PAGES_FALLBACK_STATE));
let clientGridState = JSON.parse(JSON.stringify(GITHUB_PAGES_FALLBACK_GRID));
let clientRationReport = JSON.parse(JSON.stringify(GITHUB_PAGES_FALLBACK_RATION));

function runClientTick() {
  isClientSideFallback = true;
  if (!clientSimState) clientSimState = JSON.parse(JSON.stringify(GITHUB_PAGES_FALLBACK_STATE));
  clientSimState.simulation_tick += 1;
  const tick = clientSimState.simulation_tick;
  const now = new Date();
  clientSimState.current_time = now.toISOString();

  // 1. Dynamic Mock Cow Physiology & Sensor Stream
  if (clientSimState.animals) {
    clientSimState.animals.forEach(a => {
      const isMastitis = a.dss && a.dss.mastitis_risk_score > 0.5;
      const isEstrus = a.dss && a.dss.estrus_probability > 0.5;
      const isSara = a.rumen && a.rumen.assessment && a.rumen.assessment.sara_risk_score > 0.5;

      if (a.telemetry) {
        if (!isSara && !isMastitis) {
          // Rumination oscillation (gevis getirme)
          a.telemetry.rumination_minutes_2h = Math.max(30, Math.min(65, Math.round(a.telemetry.rumination_minutes_2h + (Math.random() * 2 - 1))));
          // Circadian micro-fluctuation in body temp
          const seed = a.id ? a.id.charCodeAt(a.id.length - 1) : 0;
          a.telemetry.body_temperature_c = +(38.55 + Math.sin(tick * 0.1 + seed) * 0.12 + (Math.random() * 0.04 - 0.02)).toFixed(2);
        }
        if (!isEstrus) {
          a.telemetry.activity_index = Math.max(160, Math.min(260, Math.round(a.telemetry.activity_index + (Math.random() * 8 - 4))));
        }
      }

      // Rumen pH & fermentation dynamics
      if (a.rumen && a.rumen.telemetry && !isSara) {
        const seed = a.id ? a.id.charCodeAt(a.id.length - 1) : 0;
        a.rumen.telemetry.rumen_ph = +(6.38 + Math.sin(tick * 0.08 + seed) * 0.11 + (Math.random() * 0.02 - 0.01)).toFixed(2);
        a.rumen.telemetry.reticulorumen_temperature_c = +(a.telemetry.body_temperature_c + 0.6).toFixed(2);
      }

      // 4-Quarter Milking conductivity micro-variation
      if (a.milking_twin && a.milking_twin.quarters) {
        Object.keys(a.milking_twin.quarters).forEach(qKey => {
          const q = a.milking_twin.quarters[qKey];
          if (!q.is_diverted_to_waste) {
            q.conductivity_ms_cm = +(5.05 + (Math.random() * 0.08 - 0.04)).toFixed(2);
          }
        });
      }
    });
  }

  // 2. Autonomous Barn Robotics Dynamics
  if (clientSimState.robotics) {
    const p = clientSimState.robotics.pusher;
    p.x_m = +(p.x_m + (Math.random() * 0.8 - 0.4)).toFixed(1);
    if (p.x_m > 36) p.x_m = 4;
    if (p.x_m < 2) p.x_m = 35;
    // Feed height sensor reading fluctuation
    p.feed_height_sensor_cm = +(16.5 + Math.sin(tick * 0.1) * 2.8).toFixed(1);
    if (tick % 12 === 0) {
      p.daily_pushes_completed = Math.min(24, (p.daily_pushes_completed || 8) + 1);
    }

    const c = clientSimState.robotics.collector;
    c.x_m = +(c.x_m + (Math.random() * 0.6 - 0.3)).toFixed(1);
    c.y_m = +(c.y_m + (Math.random() * 0.6 - 0.3)).toFixed(1);
    if (c.x_m > 36) c.x_m = 5;
    if (c.y_m > 22) c.y_m = 4;
    // Manure tank gradual filling & auto-dump cycle
    c.tank_fill_pct = ((c.tank_fill_pct || 42) + 1) % 100;
    if (c.tank_fill_pct > 88) {
      c.status = "DOCKING_DISCHARGE";
    } else if (c.tank_fill_pct < 10) {
      c.status = "VACUUMING";
    }
  }

  // 3. Biogas & Cogeneration (CHP) Live Fluctuation
  if (clientSimState.energy) {
    if (clientSimState.energy.digester) {
      const dig = clientSimState.energy.digester;
      dig.daily_biogas_production_m3 = +(213.3 + Math.sin(tick * 0.05) * 3.8).toFixed(1);
      dig.methane_content_pct = +(62.5 + Math.cos(tick * 0.05) * 0.5).toFixed(1);
    }
    if (clientSimState.energy.chp) {
      const chp = clientSimState.energy.chp;
      chp.daily_electricity_generated_kwh = +(506.6 + Math.sin(tick * 0.05) * 7.2).toFixed(1);
    }
  }

  // 4. Barn Microclimate & Dynamic THI
  if (clientSimState.barn_zones && clientSimState.active_scenario !== "heatwave") {
    clientSimState.barn_zones.forEach((z, i) => {
      z.temperature_c = +(22.5 + Math.sin(tick * 0.03 + i) * 1.1).toFixed(1);
      z.relative_humidity_pct = +(58.0 + Math.cos(tick * 0.03 + i) * 2.2).toFixed(1);
      const t = z.temperature_c;
      const rh = z.relative_humidity_pct;
      z.thi_index = +(0.8 * t + (rh / 100.0) * (t - 14.4) + 46.4).toFixed(1);
    });
  }

  // 5. Move animals slightly in UWB grid
  if (clientGridState && clientGridState.positions) {
    clientGridState.positions.forEach(pos => {
      pos.x_m = +(pos.x_m + (Math.random() * 0.4 - 0.2)).toFixed(1);
      pos.y_m = +(pos.y_m + (Math.random() * 0.4 - 0.2)).toFixed(1);
      if (pos.x_m < 2) pos.x_m = 4;
      if (pos.x_m > 37) pos.x_m = 35;
      if (pos.y_m < 2) pos.y_m = 3;
      if (pos.y_m > 23) pos.y_m = 21;
    });
  }

  const edgeLabel = document.getElementById("edgeStatusLabel");
  if (edgeLabel) {
    edgeLabel.textContent = "🌐 GitHub Pages (İstemci İkizi)";
  }

  currentFarmState = clientSimState;
  renderUI(clientSimState);
  if (clientGridState) renderRtlsMap(clientGridState);
}

function handleClientScenario(scen) {
  isClientSideFallback = true;
  if (!clientSimState) clientSimState = JSON.parse(JSON.stringify(GITHUB_PAGES_FALLBACK_STATE));
  clientSimState.active_scenario = scen;

  if (scen === "dystocia") {
    const cow = clientSimState.animals.find(a => a.id === "TR-34-106");
    if (cow) {
      cow.dss.overall_health_status = "CRITICAL";
      cow.gate_assignment = "TREATMENT_PEN";
      if (cow.calving) {
        cow.calving.dystocia_assessment.alert_level = "CRITICAL_DYSTOCIA_ALARM";
        cow.calving.dystocia_assessment.stage_2_duration_minutes = 78;
        cow.calving.dystocia_assessment.calf_presentation = "POSTERIOR_BREECH";
      }
    }
    clientSimState.sorting_gate.status = "ROUTING_TREATMENT";
    clientSimState.sorting_gate.last_reason = "Distosi (Güç Doğum) Acil Müdahale Alarmı";
    clientSimState.sorting_gate.last_diverted_animal_id = "TR-34-106";
    if (clientSimState.maternity) {
      clientSimState.maternity.dystocia_emergencies_count = 1;
      clientSimState.maternity.status_summary = "🚨 KRİTİK ALARM: Doğumhanede acil müdahale gerektiren distosi vakası!";
    }
  } else if (scen === "calving_imminent") {
    const cow = clientSimState.animals.find(a => a.id === "TR-34-106");
    if (cow && cow.calving) {
      cow.calving.dystocia_assessment.stage = "STAGE_1_CERVIX_DILATION";
      cow.calving.dystocia_assessment.alert_level = "OBSERVE";
      cow.calving.telemetry.body_temperature_c = 37.85;
      cow.calving.telemetry.temp_drop_c = 0.75;
      cow.calving.telemetry.temp_drop_detected = true;
      cow.dss.overall_health_status = "WARNING";
      cow.gate_assignment = "TREATMENT_PEN";
    }
    clientSimState.sorting_gate.status = "ROUTING_TREATMENT";
    clientSimState.sorting_gate.last_reason = "Doğum Eli Kulağında (Doğumhane Sevk)";
    clientSimState.sorting_gate.last_diverted_animal_id = "TR-34-106";
  } else if (scen === "heatwave") {
    clientSimState.barn_zones.forEach(z => {
      z.temperature_c = 33.5;
      z.thi_index = 81.2;
      z.heat_stress_category = "SEVERE_STRESS";
      z.ventilation_fans_active = true;
      z.misting_active = true;
    });
  } else if (scen === "mastitis") {
    const cow = clientSimState.animals.find(a => a.id === "TR-34-102");
    if (cow) {
      cow.dss.overall_health_status = "CRITICAL";
      cow.dss.mastitis_risk_score = 0.92;
      cow.gate_assignment = "TREATMENT_PEN";
    }
    clientSimState.sorting_gate.status = "ROUTING_TREATMENT";
    clientSimState.sorting_gate.last_reason = "Yüksek Mastitis Riski (%92)";
    clientSimState.sorting_gate.last_diverted_animal_id = "TR-34-102";
  } else if (scen === "estrus") {
    const cow = clientSimState.animals.find(a => a.id === "TR-34-105");
    if (cow) {
      cow.dss.estrus_probability = 0.94;
      cow.dss.overall_health_status = "WARNING";
      cow.dss.recommended_action = "INSPECT_FOR_INSEMINATION";
    }
  } else if (scen === "lameness") {
    const cow = clientSimState.animals.find(a => a.id === "TR-34-104");
    if (cow) {
      cow.dss.overall_health_status = "CRITICAL";
      cow.gate_assignment = "TREATMENT_PEN";
    }
    clientSimState.sorting_gate.status = "ROUTING_TREATMENT";
    clientSimState.sorting_gate.last_reason = "Topallık Skoru 3.5 (Tırnak Bakım Sevk)";
    clientSimState.sorting_gate.last_diverted_animal_id = "TR-34-104";
  } else if (scen === "sara") {
    const cow = clientSimState.animals.find(a => a.id === "TR-34-103");
    if (cow) {
      cow.dss.overall_health_status = "CRITICAL";
      cow.gate_assignment = "TREATMENT_PEN";
    }
    clientSimState.sorting_gate.status = "ROUTING_TREATMENT";
    clientSimState.sorting_gate.last_reason = "SARA Asidoz Alarmı (pH 5.62)";
    clientSimState.sorting_gate.last_diverted_animal_id = "TR-34-103";
  } else if (scen === "reset") {
    clientSimState = JSON.parse(JSON.stringify(GITHUB_PAGES_FALLBACK_STATE));
  }

  currentFarmState = clientSimState;
  renderUI(clientSimState);
}

function processClientAiQuery(query) {
  const state = currentFarmState || clientSimState || GITHUB_PAGES_FALLBACK_STATE;
  const persona = (typeof currentDemoPersona !== 'undefined' && currentDemoPersona) ? currentDemoPersona : { name: "Dr. Mehmet Yılmaz", role: "Baş Hekim" };
  const userPrefix = `👤 <em>Sayın ${persona.name} (${persona.role}),</em><br><br>`;
  const q = query.toLowerCase()
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u')
    .replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c');

  // 1. Doğum & Distosi
  if (["dogum", "buzagilama", "distosi", "guc dogum", "sanci"].some(w => q.includes(w))) {
    const mat = state.maternity;
    const dys = mat && mat.calving_twins ? mat.calving_twins.find(t => t.dystocia_assessment.alert_level === "CRITICAL_DYSTOCIA_ALARM") : null;
    if (dys) {
      return userPrefix + `🚨 <strong>DİSTOSİ (GÜÇ DOĞUM) ACİL ALARMI:</strong><br><br>` +
        `- <strong>Hayvan:</strong> <strong>${dys.cow_name} (${dys.cow_id})</strong> - Gebelik: ${dys.gestation_days}. Gün<br>` +
        `- <strong>2. Evre Ikınma Süresi:</strong> <strong>${dys.dystocia_assessment.stage_2_duration_minutes} dakika</strong> (Kritik Eşik: &gt;70 dk)<br>` +
        `- <strong>Fetal Pozisyon:</strong> <strong>${dys.dystocia_assessment.calf_presentation}</strong> (Makat / Ters Geliş)<br>` +
        `- <strong>Kuyruk Sensörü:</strong> ${dys.telemetry.tail_tilt_angle_deg}° / Saatte ${dys.telemetry.tail_raising_frequency_per_hr} sancı kasılması<br>` +
        `- <strong>Doğum Kolaylık Skoru:</strong> CES 3 (Mekanik Müdahale Zorunlu)<br>` +
        `- <strong>Müdahale Kararı:</strong> ${dys.dystocia_assessment.recommended_action}<br>` +
        `- <strong>Ayırma Kapısı:</strong> İnek anında Revir / Doğumhane Bölmesine yönlendirilmiştir.`;
    }
    return userPrefix + `🤰 <strong>Doğumhane & Buzağıhane Durumu:</strong><br><br>` +
      `- <strong>Doğumhane Doluluğu:</strong> 3 / 6 İnek<br>` +
      `- <strong>24 Saat İçinde Doğum Beklenen:</strong> 1 Baş (Nazlı - TR-34-106)<br>` +
      `- <strong>-20°C Kolostrum Bankası:</strong> 42.5 L (>%22 Brix rezervi)<br>` +
      `- <strong>Durum:</strong> ${mat ? mat.status_summary : 'Doğumhane stabil gözlem altında.'}`;
  }

  // 2. Kolostrum & Brix & FPT
  if (["kolostrum", "agiz sutu", "brix", "fpt"].some(w => q.includes(w))) {
    return userPrefix + `🍼 <strong>Optik Brix Kolostrum & Bağışıklık (FPT) Raporu:</strong><br><br>` +
      `- <strong>Anne:</strong> Benekli (TR-34-102)<br>` +
      `- <strong>İlk Sağım:</strong> 6.8 Litre<br>` +
      `- <strong>Optik Brix:</strong> <strong>%24.5 Brix</strong> (Üstün Kalite - Yeşil)<br>` +
      `- <strong>Hesaplanan IgG Antikor:</strong> <strong>80.4 g/L</strong> (Eşik: &ge;50 g/L)<br>` +
      `- <strong>FPT Riski:</strong> DÜŞÜK / GÜVENLİ (Pasif Transfer Başarılı)<br>` +
      `- <strong>Protokol:</strong> İlk 2 saatte 4.0 L içirildi, kalan 2.8 L -20°C Kolostrum Bankasına dondurularak yedeklendi.`;
  }

  // 3. Genomik & Pedigri & Boğa Eşleştirmesi
  if (["genomik", "damizlik", "inbreeding", "akrabalik", "pedigri", "ciftlestirme", "boga", "sperma", "net merit"].some(w => q.includes(w))) {
    const gen = state.genomics;
    const cow = state.animals.find(a => q.includes(a.name.toLowerCase()) || q.includes(a.id.toLowerCase()));
    if (cow && gen && gen.mating_matrix_recommendations && gen.mating_matrix_recommendations[cow.id]) {
      const top = gen.mating_matrix_recommendations[cow.id][0];
      return userPrefix + `🧬 <strong>${cow.name} (${cow.id}) Akıllı Genomik Çiftleştirme Raporu:</strong><br><br>` +
        `- <strong>Bireysel Net Merit:</strong> $${cow.pedigree ? cow.pedigree.gebv.net_merit_dollars : 800} NM$<br>` +
        `- <strong>Önerilen 1. Boğa:</strong> <strong>${top.bull.bull_name}</strong> (${top.bull.semen_company})<br>` +
        `- <strong>Tahmini Yavru Net Merit:</strong> <strong>$${top.expected_progeny_net_merit} NM$</strong> (+${top.expected_progeny_milk_kg} kg süt)<br>` +
        `- <strong>Akrabalık Katsayısı (F):</strong> <strong>%${top.progeny_inbreeding_f_pct.toFixed(2)}</strong> (✅ Güvenli &lt; %6.25)<br>` +
        `- <strong>Sperma Türü:</strong> <code>${top.recommendation_type}</code>`;
    }
    return userPrefix + `🧬 <strong>Sürü Genomik Islah & Akrabalık (Inbreeding) Tablosu:</strong><br><br>` +
      `- <strong>Genotiplenen Sürü:</strong> 6 Baş Holstein Friesian<br>` +
      `- <strong>Sürü Ortalama Net Merit:</strong> <strong>$750 NM$</strong> (TPI: 2,713)<br>` +
      `- <strong>Sürü Inbreeding Oranı (F):</strong> <strong>%5.77</strong> (Kritik Eşik: &lt; %6.25 Güvenli)<br>` +
      `- <strong>Elit Verici İnekler:</strong> 2 Baş (Benekli $890 NM$, Elif $840 NM$ - Dişi Sperma Adayı)<br>` +
      `- <strong>Katalog Boğaları:</strong> DG Captain ($1,140 NM$), AltaZarek ($1,020 NM$), Einstein ($940 NM$), Renegade ($980 NM$)`;
  }

  // 4. Robot Filosu (Juno & Discovery)
  if (["robot", "juno", "discovery", "yem itici", "gubre robotu", "filo"].some(w => q.includes(w))) {
    const rob = state.robotics;
    return userPrefix + `🤖 <strong>Otonom Ahır İçi Robot Filosu İkizi:</strong><br><br>` +
      `<strong>1. Juno-X Otonom Yem İtici:</strong><br>` +
      `- Durum: ${rob ? rob.pusher.status : 'İtme Yapıyor'} (Yem yüksekliği: 18.5 cm, Helezon: 85 rpm)<br>` +
      `- Katkı: Kuru madde tüketimi +%3.2 DMI, süt verimi +1.1 kg/gün.<br><br>` +
      `<strong>2. Discovery-Vac Gübre Robotu:</strong><br>` +
      `- Durum: ${rob ? rob.collector.status : 'Vakumluyor'} (Tank: %42, 350L)<br>` +
      `- Katkı: Gübreyi biyogaz çukuruna aktarır, topallık riskini %28, mastitisi %32 düşürür.<br>` +
      `- Enerji: Robotlar çiftliğin kendi biyogaz elektriğiyle sıfır maliyetle şarj edilmektedir.`;
  }

  // 5. Biyogaz & Enerji
  if (["enerji", "biyogaz", "chp", "elektrik", "kojenerasyon", "karbon", "metan"].some(w => q.includes(w))) {
    return userPrefix + `⚡ <strong>Döngüsel Çiftlik Biyogazı & Kojenerasyon (CHP) İkizi:</strong><br><br>` +
      `- <strong>Günlük Üretilen Biyogaz:</strong> 213.3 m³/gün (%62.5 CH₄)<br>` +
      `- <strong>CHP Elektrik Üretimi:</strong> <strong>506.6 kWh/gün</strong> (60 kW Jeneratör)<br>` +
      `- <strong>Çiftlik Tüketimi:</strong> 100.0 kWh/gün<br>` +
      `- <strong>Enerji Öz Yeterlilik:</strong> <strong>%506.6 (Net-Zero Enerji Fazlası)</strong><br>` +
      `- <strong>Şebekeye Temiz Elektrik Satışı:</strong> +406.6 kWh/gün (+1,829 TL/gün)<br>` +
      `- <strong>Yıllık Toplam Katma Değer:</strong> +1,235,000 TL/yıl (Elektrik + Bio-gübre)`;
  }

  // 6. Mastitis & 4 Loblu Sağım & İletkenlik
  if (["mastitis", "scc", "somatik", "iletkenlik", "meme", "sagim"].some(w => q.includes(w))) {
    const inf = state.animals.find(a => a.dss.mastitis_risk_score > 0.5 || (a.milking_twin && a.milking_twin.is_any_quarter_diverted));
    if (inf) {
      return userPrefix + `🦠 <strong>Subklinik / Robotik Mastitis Uyarısı:</strong><br><br>` +
        `- <strong>Hayvan:</strong> <strong>${inf.name} (${inf.id})</strong><br>` +
        `- <strong>Mastitis Riski:</strong> %${Math.round(inf.dss.mastitis_risk_score * 100)}<br>` +
        `- <strong>Robotik 4 Lob Durumu:</strong> Sol Arka (LR) lobunda 620,000 SCC tespit edilip sütü atık vanasına tahliye edildi.<br>` +
        `- <strong>Kurtarılan Sağlıklı Süt:</strong> Diğer 3 lobun sağlıklı sütü ana tanka kabul edilmiştir.`;
    }
    return userPrefix + `✅ <strong>Meme Sağlığı & Sağım Durumu İdeal:</strong> Sürüde klinik mastitis tespit edilmemiştir. Ortalama somatik hücre sayısı normaller dahilindedir (<180,000 SCC).`;
  }

  // 7. Topallık & BCS Kondisyon
  if (["topallik", "ayak", "tirnak", "yuruyus", "lameness", "bcs", "kondisyon"].some(w => q.includes(w))) {
    const lame = state.animals.find(a => a.vision && a.vision.lameness.score >= 2.5);
    if (lame) {
      return userPrefix + `🦶 <strong>3D Kamera Topallık (Lameness) Tespiti:</strong><br><br>` +
        `- <strong>Hayvan:</strong> <strong>${lame.name} (${lame.id})</strong><br>` +
        `- <strong>Sprecher Skoru:</strong> ${lame.vision.lameness.score.toFixed(1)} / 5.0<br>` +
        `- <strong>Sırt Kemerleşmesi:</strong> %${Math.round(lame.vision.lameness.back_curvature_index * 100)}<br>` +
        `- <strong>Karar:</strong> Ayırma kapısı ineği Tırnak Bakım Locasına sevk etmiştir.`;
    }
    return userPrefix + `✅ <strong>Tırnak ve Yürüyüş Sağlığı İdeal:</strong> 3D derinlik kamerası tüm ineklerin sırt çizgisini düz (Skor 1) ve adım uzunluklarını simetrik olarak teyit etmiştir.`;
  }

  // 8. Rumen Asidozu (SARA) & Rasyon
  if (["sara", "rumen", "asidoz", "ph", "vfa", "rasyon"].some(w => q.includes(w))) {
    const acid = state.animals.find(a => a.rumen && a.rumen.assessment.sara_risk_score >= 0.6);
    if (acid) {
      return userPrefix + `🧪 <strong>SARA Rumen Asidozu Alarmı:</strong><br><br>` +
        `- <strong>Hayvan:</strong> <strong>${acid.name} (${acid.id})</strong><br>` +
        `- <strong>Rumen pH:</strong> ${acid.rumen.telemetry.rumen_ph.toFixed(2)} (Eşik: &lt; 5.80)<br>` +
        `- <strong>Asetat:Propiyonat:</strong> ${acid.rumen.telemetry.acetate_to_propionate_ratio.toFixed(2)} (Bozulmuş)<br>` +
        `- <strong>Öneri:</strong> 150g sodyum bikarbonat tampon besleme takviyesi yapınız.`;
    }
    return userPrefix + `🌾 <strong>Rasyon & Rumen Durumu:</strong> Günlük rasyonda BALANCED_PARETO stratejisi uygulanmaktadır. Rumen pH 6.35 - 6.50 ile ideal mikrobiyota fermantasyonu sağlanmaktadır.`;
  }

  // 9. Kızgınlık / Estrus
  if (["kizginlik", "estrus", "tohumlama", "gebe"].some(w => q.includes(w))) {
    const est = state.animals.find(a => a.dss.estrus_probability >= 0.7);
    if (est) {
      return userPrefix + `⚡ <strong>Kızgınlık (Estrus) Tespiti:</strong><br><br>` +
        `- <strong>Hayvan:</strong> <strong>${est.name} (${est.id})</strong><br>` +
        `- <strong>Kızgınlık Olasılığı:</strong> %${Math.round(est.dss.estrus_probability * 100)}<br>` +
        `- <strong>Aktivite Artışı:</strong> ${est.telemetry.activity_index} adım/saat (+%185 artış)<br>` +
        `- <strong>Tohumlama Zamanı:</strong> Önümüzdeki 8-12 saat içinde elit dişi sperma ile tohumlama önerilir.`;
    }
    return userPrefix + `ℹ️ <strong>Kızgınlık Takibi:</strong> Şu an sürüde aktif kızgınlık döngüsüne giren inek bulunmamaktadır. Telemetri sürekli takip edilmektedir.`;
  }

  // 10. Genel Durum & Finans
  if (["finans", "para", "gelir", "maliyet", "roi", "kar"].some(w => q.includes(w))) {
    return userPrefix + `💰 <strong>Finansal ROI & Süt Gelir Tablosu (80 Baş Projeksiyonu):</strong><br><br>` +
      `- <strong>Günlük Brüt Süt Satış Geliri:</strong> 42,240.00 TL/gün<br>` +
      `- <strong>Günlük TMR Yem Gideri:</strong> 15,408.00 TL/gün<br>` +
      `- <strong>Yem Üzeri Günlük Net Gelir (IOFC):</strong> 26,832.00 TL/gün<br>` +
      `- <strong>Aylık Dijital İkiz Net Tasarrufu:</strong> 93,800.00 TL/ay<br>` +
      `- <strong>Yatırım Geri Dönüş Süresi (ROI):</strong> <strong>1.1 Yıl</strong>`;
  }

  return userPrefix + `🤖 <strong>AgriTwin AI Çiftlik Danışmanı:</strong><br><br>` +
    `"${query}" sorunuz çiftlik dijital ikizi telemetrisi ile analiz edildi.<br>` +
    `- <strong>Sürü Durumu:</strong> 6 Baş Holstein Friesian (%100 telemetri bağlı).<br>` +
    `- <strong>Aktif Sistemler:</strong> RTLS Isı Haritası, Otonom Robot Filosu, 4 Loblu Sağım Robotu, Biyogaz CHP ve Genomik Pedigri aktiftir.<br>` +
    `- Detaylı analiz için <em>"doğumhane durumu"</em>, <em>"genomik eşleştirme"</em>, <em>"robot filosu"</em> veya <em>"finansal roi"</em> yazabilirsiniz.`;
}

let isPlaying = true;
let pollTimer = null;
let currentFarmState = null;
let selectedAnimal = null;

// Initialize on page load

// ============================================================================
// ACADEMIC TOOLTIP DICTIONARY & INTELLIGENT POSITIONING ENGINE
// Standards: NASEM 2021, NRC 2001, ICAR, IDF, Wood (1967), Wright (1922)
// ============================================================================
const ACADEMIC_DICTIONARY = {
  "sara": {
    title: "Subakut Rumen Asidozu (SARA)",
    standard: "Krause & Oetzel (2006) / Gozho et al.",
    formula: "pH = -log₁₀[H⁺] • Eşik: pH < 5.80 (>180 dk/gün)",
    range: "Fizyolojik: 6.20 - 6.80 | SARA Riski: < 5.80",
    desc: "Yüksek nişastalı kesif yemlerin hızlı fermantasyonu sonucu rumende uçucu yağ asitlerinin (UYA) birikmesi, rumen epitelinde papilla hasarı, endotoksin salımı ve sistemik subklinik yangıya yol açan metabolik bozukluktur."
  },
  "rumen_ph": {
    title: "İntraruminal pH Kinetiği",
    standard: "NASEM (2021) Dairy NRC Standartları",
    formula: "Kinetik eğri: Düşüş (yem sonrası) & Tamponlanma (geviş)",
    range: "Optimum: 6.25 - 6.65 | Kritik Asidoz: < 5.50",
    desc: "İntraruminal kablosuz bolus sensörü ile sürekli telemetrik izlenen işkembe asitlik derecesi. Selülolitik mikroorganizmaların yaşayabilmesi için pH'nın 6.0'ın üzerinde kalması şarttır."
  },
  "ap_ratio": {
    title: "Asetat / Propiyonat (A:P) Mol Oranı",
    standard: "Bauman & Griinari (2003) MFD Modeli",
    formula: "A:P = Mol Asetat / Mol Propiyonat",
    range: "Hedef Aralık: > 2.80 (İdeal: 3.0 - 3.5)",
    desc: "Selülolitik (kaba yem) fermantasyonunun asetat, amilolitik (nişasta) fermantasyonunun propiyonat üretmesi esasına dayanır. Oranın 2.20 altına inmesi Süt Yağı Depresyonunu (MFD) tetikler."
  },
  "vfa": {
    title: "Toplam Uçucu Yağ Asitleri (VFA / UYA)",
    standard: "Van Soest (1994) Ruminant Besleme",
    formula: "Toplam VFA = Asetat + Propiyonat + Bütirat + İzo-asitler",
    range: "Normal: 80 - 140 mmol/L",
    desc: "Ruminantın günlük net enerji (NEL) ihtiyacının %70-80'ini karşılayan ana mikrobiyal fermantasyon metabolitleridir."
  },
  "rumen_temp": {
    title: "Rumen Retikulum Sıcaklığı",
    standard: "Bewley et al. (2008) Biyotelemetri",
    formula: "T_retikulum ≈ T_rektal + 0.5°C",
    range: "Fizyolojik: 38.5°C - 39.5°C | Ateş / Yangı: > 39.8°C",
    desc: "İşkembe iç sıcaklığı; su içme anında geçici düşüşler gösterir, sistemik enfeksiyon, mastitis veya sıcaklık stresinde bazal seviyenin üzerine çıkar."
  },
  "buffer_need": {
    title: "Tampon Madde İhtiyacı (NaHCO₃)",
    standard: "NRC (2001) / Erdman (1988)",
    formula: "Dozaj = KM Tüketiminin %0.75 - %1.00'i",
    range: "Normal: 0 g | Akut Asidoz Desteği: 150 - 250 g/baş/gün",
    desc: "Rumende tükürük salgısının (bikarbonat ve fosfat) yetersiz kaldığı asidoz dönemlerinde pH'yı 6.20 bandına yükseltmek için rasyona eklenen sodyum bikarbonat desteğidir."
  },
  "dim": {
    title: "Laktasyon Günü (DIM - Days in Milk)",
    standard: "ICAR Laktasyon Kayıt Standardı",
    formula: "DIM = Güncel Tarih - Buzağılama Tarihi",
    range: "Pik: 45 - 90 gün | Standart Laktasyon: 305 gün",
    desc: "İneğin buzağılamasından itibaren geçen gün sayısıdır. Süt verim eğrisi, kuru madde tüketimi kapasitesi ve negatif enerji dengesi (NEB) bu parametre üzerinden modellenir."
  },
  "bcs": {
    title: "Vücut Kondisyon Skoru (BCS)",
    standard: "Ferguson, Galligan & Thomsen (1994) / 1-5 Skalası",
    formula: "3D Derinlik Kamerası & Omurga-Pelvis Hacim Analizi",
    range: "Doğumda: 3.25 - 3.50 | Erken Laktasyonda: ≥ 2.75",
    desc: "Deri altı yağ rezervlerinin 1.0 (aşırı kaşektik) ile 5.0 (aşırı obez) arasında skorlanmasıdır. Laktasyon başında 0.75 puandan fazla kayıp ketozis ve döl verimi düşüklüğüne yol açar."
  },
  "lameness": {
    title: "Lokomosyon / Topallık Skoru",
    standard: "Sprecher et al. (1997) 5'li Skala",
    formula: "Computer Vision Omurga Eğriliği (Back Arch Index)",
    range: "Skor 1 (Sağlıklı) | Skor 2 (Hafif) | Skor ≥ 3 (Klinik Topallık)",
    desc: "İneğin yürürken ve dururken sırt çizgisi düzlüğü, adım uzunluğu ve basış simetrisinin yapay zeka ile analizi. Tırnak lezyonları ve dijital dermatiti erken aşamada yakalar."
  },
  "wood_curve": {
    title: "Wood Laktasyon Eğrisi Modeli",
    standard: "Wood (1967) Nature 216:164",
    formula: "y(t) = a • tᵇ • e⁻ᶜᵗ",
    range: "a: Başlangıç Verimi | b: Yükseliş Eğimi | c: Azalış (Persistency)",
    desc: "Laktasyon süresince günlük süt verim dinamiğini tanımlayan gama fonksiyonu. İneğin genetik kapasitesi, pik verim günü (t_max = b/c) ve persistanlığını matematiksel olarak modeller."
  },
  "scc": {
    title: "Somatik Hücre Sayısı (SCC / SHS)",
    standard: "IDF Standard 148A / ICAR Süt Hijyeni",
    formula: "Hücre / mL (Nötrofil granülositler ve dökülen epitel)",
    range: "Sağlıklı: < 150.000 | Subklinik Mastitis: ≥ 200.000 | Klinik: > 400.000",
    desc: "Meme bezinde yangı (mastitis) varlığının uluslararası altın standart göstergesidir. 200.000 eşiğinin aşılması, patojen istilasına karşı bağışıklık hücrelerinin süt kanallarına göç ettiğini gösterir."
  },
  "conductivity": {
    title: "Süt Elektriksel İletkenliği (EC)",
    standard: "Norberg et al. (2004) Robotik Sağım Telemetrisi",
    formula: "mS/cm (MiliSiemens / santimetre)",
    range: "Normal: 4.80 - 5.50 mS/cm | Mastitis İkazı: > 5.80 mS/cm",
    desc: "Meme dokusu hasarında kan kapillerlerinden süte Na⁺ ve Cl⁻ sızıntısı artarken K⁺ azalır; artan iyon konsantrasyonu sütün elektriksel iletkenliğini yükselterek subklinik mastitisi haber verir."
  },
  "rumination": {
    title: "Geviş Getirme Süresi (Rumination Time)",
    standard: "Schirmann et al. (2009) / Beauchemin (2018)",
    formula: "Dakika / 2 saat (Akustik mikrofon ve ivmeölçer tasma)",
    range: "Fizyolojik: 35 - 45 dk/2sa (450 - 550 dk/gün) | Kritik: < 18 dk/2sa",
    desc: "İşkembe doluluğu, peNDF (fiziksel efektif lif) sindirimi ve tükürükle tampon madde üretiminin doğrudan aynasıdır. Ani düşüşler metabolik sancı, SARA veya yaklaşan doğumu gösterir."
  },
  "thi": {
    title: "Sıcaklık ve Nem İndeksi (THI - Heat Stress)",
    standard: "NRC (1971) / Collier et al. (2012)",
    formula: "THI = (1.8•T + 32) - (0.55 - 0.0055•RH)•(1.8•T - 26)",
    range: "Konfor: < 68 | Hafif Stres: 68-71 | Orta: 72-77 | Şiddetli: ≥ 78",
    desc: "Hava sıcaklığı ve bağıl nemin birleşik biyofiziksel etkisi. THI 68 üzerinde süt ineklerinde solunum sayısı artar, DMI düşer; 72 üzerinde süt verimi %10-15 geriler; 78 üzerinde asidoz ve abort riski doğar."
  },
  "methane": {
    title: "Enterik Metan Emisyonu (CH₄)",
    standard: "IPCC (2019) Tier 3 & RuFaS Mekanistik Modeli",
    formula: "CO₂ + 4H₂ → CH₄ + 2H₂O (Metanojenik Archaea)",
    range: "Ortalama: 380 - 450 g CH₄/gün (20 - 24 g CH₄/kg DMI)",
    desc: "İşkembede karbonhidrat fermantasyonunda açığa çıkan hidrojenin mikroorganizmalarca metana dönüştürülmesidir. Rasyona nitrat, lipid veya kırmızı alg eklenerek %15-30 azaltılabilir."
  },
  "iofc": {
    title: "Yem Üzeri Gelir (IOFC - Income Over Feed Cost)",
    standard: "NASEM (2021) / Penn State Dairy Extension",
    formula: "IOFC = (Süt Verimi × Süt Fiyatı) - Günlük TMR Yem Maliyeti",
    range: "Hedef: > 140 ₺/baş/gün (Sürü ortalaması)",
    desc: "Çiftlik brüt karlılığının en hassas operasyonel göstergesidir. Sabit genel giderler öncesi, her bir ineğin yediği yem maliyetini karşıladıktan sonra bıraktığı net marjinal geliri ifade eder."
  },
  "roi": {
    title: "Dinamik Yatırım Geri Dönüşü (ROI)",
    standard: "PLF (Hassas Hayvancılık) Ekonomik Modellemesi",
    formula: "ROI = (Yıllık Net Katma Değer / Toplam PLF Yatırımı) × 100",
    range: "Projeksiyon: 14 - 18 Ay Amortisman Süresi",
    desc: "Sensörler, otonom robotlar, genomik seleksiyon ve erken teşhis DSS'in sağladığı yem tasarrufu, azalan veteriner giderleri ve korunan süt verimi ile sağlanan ekonomik geri dönüş oranıdır."
  },
  "inbreeding": {
    title: "Akrabalık Katsayısı (Wright's F)",
    standard: "Wright (1922) / VanRaden (1992)",
    formula: "F = ∑ [(1/2)^(n₁+n₂+1) • (1 + F_A)] (IBD Olasılığı)",
    range: "Güvenli: < 6.25% (Kuzen Eşleşmesi Altı) | Kritik: ≥ 6.25%",
    desc: "Bireyin genomunda rastgele seçilen iki alelin ortak bir atadan miras kalma (Identity by Descent) olasılığıdır. Yüksek F değeri döl veriminde, doğum ağırlığında ve bağışıklıkta inbreeding depresyonuna yol açar."
  },
  "gebv": {
    title: "Genomik Tahmini Damızlık Değeri (GEBV)",
    standard: "Meuwissen et al. (2001) GBLUP & USDA-CDCB",
    formula: "GEBV = ∑ (SNP_i × Marker_Effect_i)",
    range: "Net Merit (NM$): > +850 $ | TPI: > 2800",
    desc: "Hayvanın DNA'sındaki 50.000+ tek nükleotid polimorfizminin (SNP) genomik referans popülasyonu ile eğitilmiş Bayes/BLUP modelleriyle ekonomik özellikler yönünden damızlık değerinin hesaplanmasıdır."
  },
  "dystocia": {
    title: "Distosi (Güç Doğum) DSS & PBTD",
    standard: "Streyl et al. (2011) / Burfeind et al. (2011)",
    formula: "PBTD: Doğumdan 12-24s önce Vücut Isısında -0.5°C ile -0.8°C düşüş",
    range: "Distosi Skoru 1 (Kolay) | Skor 2 (Hafif Yardım) | Skor ≥ 3 (Müdahale)",
    desc: "Luteoliz ve progesteron çekilmesiyle oluşan pre-partum sıcaklık düşüşü, gevişin durması ve ivmeölçer huzursuzluk verilerini birleştiren karar destek ikizi. Zamanında veteriner müdahalesi buzağı ölümlerini %85 önler."
  },
  "brix": {
    title: "Kolostrum Brix Refraktometrisi & FPT",
    standard: "Buczinski & Vandeweerd (2016) / McGuirk (2014)",
    formula: "Brix % ≥ 22% ⇔ Kolostrum IgG ≥ 50 g/L",
    range: "Mükemmel: ≥ 22% Brix | Yetersiz / Riskli: < 20% Brix",
    desc: "Yeni doğan buzağının agammaglobulinemik doğması nedeniyle ilk 2-4 saatte kaliteli kolostrum alması hayati önem taşır. Brix ≥ %22, buzağıda Pasif Transfer Yetmezliğini (FPT - serum IgG < 10 g/L) kesin olarak engeller."
  },
  "icar_ade": {
    title: "ICAR Animal Data Exchange (ADE) Standartı",
    standard: "ICAR (International Committee for Animal Recording) v2.0",
    formula: "ISO 11784/11785 RFID Kimliği & Standart Ontoloji",
    range: "Uluslararası Uyumluluk: %100",
    desc: "Dünya Hayvan Kayıt Komitesi'nin sürü yönetim sistemleri, sağım robotları ve ıslah birlikleri arasında veri entegrasyonu sağlayan resmi XML/JSON veri değişim protokolüdür."
  },
  "biogas_chp": {
    title: "Biyogaz Anaerobik Çürütme & Kojenerasyon (CHP)",
    standard: "VDI 4630 / IPCC Atık Yönetimi Metodolojisi",
    formula: "CH₄ Verimi ≈ 0.25 - 0.35 m³ CH₄ / kg Organik Kuru Madde (VS)",
    range: "Metan Oranı: %55 - %65 | Kojenerasyon Verimi: %86 (%38E + %48T)",
    desc: "Sığır gübresinin oksijensiz ortamda mezofilik bakterilerce fermantasyonu sonucu elektrik ve ısı üretilmesidir. Çiftliğin kendi enerjisini karşılayarak net-sıfır karbon döngüsü kurmasını sağlar."
  },
  "juno_robot": {
    title: "Otonom Yem İtici Robot (Lely Juno X İkizi)",
    standard: "DeVries et al. (2005) TMR Yemleme Davranışı",
    formula: "45 dk Periyodik İtme ⇒ DMI Artışı +%3.2",
    range: "İtme Sıklığı: Günde 16 - 20 tur | Batarya: Li-ion Otonom Şarj",
    desc: "Yemliğin önündeki TMR rasyonunu periyodik olarak ineklerin uzanma mesafesine iten otonom robot. Yem seçiciliğini (sorting) önler, rasyon asidozunu engeller ve kuru madde tüketimini stimüle eder."
  },
  "discovery_robot": {
    title: "Otonom Gübre Vakum Robotu (Discovery Vac İkizi)",
    standard: "Cook & Nordlund (2009) Tırnak Hijyeni Standartları",
    formula: "Vakumlu Gübre Toplama ⇒ Zemin Amonyak Emisyonu -%45",
    range: "Tank Kapasitesi: 400 L | Temizleme Verimi: 12.000 m²/gün",
    desc: "Izgaralı veya düz ahır zeminlerindeki taze gübreyi su püskürterek vakumlayan ve biyogaz reaktörüne basan mobil robot. Çiftlikte dijital dermatit ve bulaşıcı tırnak enfeksiyonlarını önler."
  },
  "rufas_model": {
    title: "RuFaS Çok Amaçlı Rasyon Optimizasyonu",
    standard: "Ruminant Farm Systems (RuFaS) Konsorsiyumu",
    formula: "min [Maliyet] & min [CH₄ Yoğunluğu] (Pareto Sınırı)",
    range: "Metan Azalımı: -%16.4 | Yem Tasarrufu: +%14.2",
    desc: "Kaba yem lif fraksiyonları (NDF/ADF), mikrobiyal protein sentezi ve rumen fermantasyon kinetiğini eşzamanlı simüle ederek hem minimum maliyet hem de minimum enterik sera gazı üreten rasyon denklemidir."
  },
  "smart_gate": {
    title: "Robotik Otomatik Ayırma Kapısı (Smart Sorting Gate)",
    standard: "ICAR Sağım & Sürü Sağlığı Entegrasyonu",
    formula: "DSS Karar Matrisi ⇒ Normal: Ahır (Paddock) | İkaz: Revir / Karantina",
    range: "Yanıt Süresi: < 350 ms | Doğruluk: %99.4",
    desc: "Sağım robotundan veya yemlikten çıkan hayvanın UWB RFID künyesini okuyarak, DSS'in mastitis, estrus veya laktik asidoz alarmı verdiği inekleri sürüden izole edip revire ayıran pnömatik yönlendirme kapısıdır."
  },
  "edge_computing": {
    title: "Yerel Ahır Uç Bilişim (Edge Computing Architecture)",
    standard: "IEEE / Industrial IoT Standartları",
    formula: "Gecikme (Latency) ≤ 15 ms • Çevrimdışı Çalışma Dayanıklılığı",
    range: "Çevrimdışı Bellek: 72 Saat Tam Otonom",
    desc: "İnternet kesilse dahi robotik ayırma kapısı, acil veteriner alarmı ve rasyon itme komutlarını yerel sunucuda sıfır gecikmeyle işleten bağımsız donanım mimarisidir."
  }
};

let academicTooltipEl = null;

function initAcademicTooltips() {
  if (typeof document === "undefined") return;
  if (!academicTooltipEl) {
    academicTooltipEl = document.createElement("div");
    academicTooltipEl.id = "academicTooltipFloatingCard";
    academicTooltipEl.className = "academic-tooltip-floating";
    document.body.appendChild(academicTooltipEl);
  }

  function showTooltip(e, target) {
    const key = target.getAttribute("data-academic-key");
    const customTip = target.getAttribute("data-tooltip");
    let htmlContent = "";

    if (key && ACADEMIC_DICTIONARY[key]) {
      const item = ACADEMIC_DICTIONARY[key];
      htmlContent = `
        <div class="at-header">
          <strong class="at-title">${item.title}</strong>
          <span class="at-badge">${item.standard}</span>
        </div>
        <div class="at-body">
          ${item.formula ? `<div class="at-formula">📐 <code>${item.formula}</code></div>` : ""}
          ${item.range ? `<div class="at-range">🎯 ${item.range}</div>` : ""}
          <div class="at-desc">${item.desc}</div>
        </div>
      `;
    } else if (customTip) {
      htmlContent = `
        <div class="at-header">
          <strong class="at-title">Akademik Bilgi & Parametre</strong>
          <span class="at-badge">DİJİTAL İKİZ</span>
        </div>
        <div class="at-body">
          <div class="at-desc">${customTip}</div>
        </div>
      `;
    } else {
      hideTooltip();
      return;
    }

    academicTooltipEl.innerHTML = htmlContent;
    academicTooltipEl.classList.add("active");
    positionTooltip(e, target);
  }

  function positionTooltip(e, target) {
    if (!academicTooltipEl || !academicTooltipEl.classList.contains("active")) return;
    const rect = target.getBoundingClientRect();
    const tipRect = academicTooltipEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let posX = e.clientX !== undefined ? e.clientX + 14 : rect.left + rect.width / 2;
    let posY = e.clientY !== undefined ? e.clientY + 14 : rect.bottom + 8;

    // Viewport right collision
    if (posX + tipRect.width > viewportWidth - 16) {
      posX = viewportWidth - tipRect.width - 16;
    }
    // Viewport left collision
    if (posX < 12) posX = 12;

    // Viewport bottom collision: flip above cursor
    if (posY + tipRect.height > viewportHeight - 16) {
      const altY = (e.clientY !== undefined ? e.clientY : rect.top) - tipRect.height - 14;
      if (altY > 12) {
        posY = altY;
      } else {
        posY = viewportHeight - tipRect.height - 12;
      }
    }

    academicTooltipEl.style.left = `${Math.round(posX)}px`;
    academicTooltipEl.style.top = `${Math.round(posY)}px`;
  }

  function hideTooltip() {
    if (academicTooltipEl) {
      academicTooltipEl.classList.remove("active");
    }
  }

  // Delegated event listener for all current and dynamically created elements
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-academic-key], [data-tooltip]");
    if (target) {
      showTooltip(e, target);
    }
  });

  document.addEventListener("mousemove", (e) => {
    const target = e.target.closest("[data-academic-key], [data-tooltip]");
    if (target && academicTooltipEl && academicTooltipEl.classList.contains("active")) {
      positionTooltip(e, target);
    }
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest("[data-academic-key], [data-tooltip]");
    if (target) {
      hideTooltip();
    }
  });

  // Touch / Mobile Support
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-academic-key], [data-tooltip]");
    if (target) {
      showTooltip(e, target);
    } else {
      hideTooltip();
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  fetchFarmState();
  fetchSpatialRtls();
  startAutoPoll();
  initAcademicTooltips();
});

function startAutoPoll() {
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(() => {
    if (isPlaying) {
      advanceStep(false);
    } else {
      fetchFarmState();
      fetchSpatialRtls();
    }
  }, 2500);
}

function togglePlayPause() {
  isPlaying = !isPlaying;
  const playIcon = document.getElementById("playIcon");
  const playText = document.getElementById("playText");
  if (isPlaying) {
    playIcon.textContent = "⏸️";
    playText.textContent = "Durdur";
  } else {
    playIcon.textContent = "▶️";
    playText.textContent = "Başlat";
  }
}

async function fetchFarmState() {
  try {
    const res = await fetch("/api/state");
    if (!res.ok) throw new Error("State fetch failed");
    const data = await res.json();
    currentFarmState = data;
    renderUI(data);
  } catch (err) {
    runClientTick();
  }
}

async function fetchSpatialRtls() {
  try {
    const res = await fetch("/api/spatial/grid");
    if (!res.ok) throw new Error("Grid fetch failed");
    const gridData = await res.json();
    renderRtlsMap(gridData);
  } catch (err) {
    if (clientGridState) renderRtlsMap(clientGridState);
  }
}

async function advanceStep(manual = true) {
  try {
    const res = await fetch("/api/simulate/tick", { method: "POST" });
    if (!res.ok) throw new Error("Tick failed");
    await fetchFarmState();
    await fetchSpatialRtls();
  } catch (err) {
    runClientTick();
  }
}

async function triggerScenario(scenarioName) {
  try {
    const body = { scenario: scenarioName };
    if (scenarioName === "mastitis") {
      body.animal_id = "TR-34-102"; // Benekli
    } else if (scenarioName === "estrus") {
      body.animal_id = "TR-34-105"; // Elif
    } else if (scenarioName === "lameness") {
      body.animal_id = "TR-34-104"; // Yıldız
    } else if (scenarioName === "sara") {
      body.animal_id = "TR-34-103"; // Papatya
    }

    const res = await fetch("/api/simulate/scenario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error("Scenario trigger failed");
    await fetchFarmState();
    await fetchSpatialRtls();

    if (scenarioName === "mastitis") {
      setTimeout(() => openXaiModal("TR-34-102"), 300);
    } else if (scenarioName === "estrus") {
      setTimeout(() => openXaiModal("TR-34-105"), 300);
    } else if (scenarioName === "lameness") {
      setTimeout(() => openXaiModal("TR-34-104"), 300);
    } else if (scenarioName === "sara") {
      setTimeout(() => openXaiModal("TR-34-103"), 300);
    }
  } catch (err) {
    if (typeof handleClientScenario === "function") {
      handleClientScenario(scenarioName);
    }
    if (scenarioName === "mastitis") {
      setTimeout(() => openXaiModal("TR-34-102"), 300);
    } else if (scenarioName === "estrus") {
      setTimeout(() => openXaiModal("TR-34-105"), 300);
    } else if (scenarioName === "lameness") {
      setTimeout(() => openXaiModal("TR-34-104"), 300);
    } else if (scenarioName === "sara") {
      setTimeout(() => openXaiModal("TR-34-103"), 300);
    } else if (scenarioName === "dystocia" || scenarioName === "calving_imminent") {
      setTimeout(() => openCalvingModal(), 300);
    }
  }
}

async function toggleEdgeConnection() {
  try {
    const res = await fetch("/api/edge/toggle-connection", { method: "POST" });
    if (!res.ok) throw new Error("Edge toggle failed");
    await fetchFarmState();
  } catch (err) {
    const dot = document.getElementById("edgeDot");
    const label = document.getElementById("edgeStatusLabel");
    if (dot && label) {
      if (dot.classList.contains("offline")) {
        dot.classList.remove("offline");
        dot.classList.add("online");
        label.textContent = "📡 Edge: Online (İstemci)";
      } else {
        dot.classList.remove("online");
        dot.classList.add("offline");
        label.textContent = "⚠️ Edge: Offline (İstemci)";
      }
    }
  }
}

async function prescribeTreatment() {
  if (!selectedAnimal) return;
  try {
    const res = await fetch("/api/veterinary/prescribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        animal_id: selectedAnimal.id,
        drug: "Sefalosporin İntramammar",
        withdrawal_days: 5
      })
    });
    if (!res.ok) throw new Error("Prescription failed");
    await fetchFarmState();
    
    const drugBox = document.getElementById("drugWithdrawalBox");
    if (drugBox) drugBox.style.display = "flex";
  } catch (err) {
    if (clientSimState && selectedAnimal) {
      if (!clientSimState.edge_gateway.active_treatments) clientSimState.edge_gateway.active_treatments = [];
      clientSimState.edge_gateway.active_treatments.push({
        animal_id: selectedAnimal.id,
        drug_administered: "Sefalosporin İntramammar",
        withdrawal_period_days: 5,
        treatment_timestamp: new Date().toISOString(),
        diagnosis: "Mastitis Tedavisi"
      });
      const drugBox = document.getElementById("drugWithdrawalBox");
      if (drugBox) drugBox.style.display = "flex";
      renderUI(clientSimState);
    }
  }
}

// AI Assistant Interactions
async function askAiPrompt(query) {
  document.getElementById("aiInputText").value = query;
  await executeAiQuery(query);
}

function handleAiKeydown(event) {
  if (event.key === "Enter") {
    submitCustomAiQuery();
  }
}

async function submitCustomAiQuery() {
  const inputEl = document.getElementById("aiInputText");
  const query = inputEl.value.trim();
  if (!query) return;
  await executeAiQuery(query);
}

async function executeAiQuery(query) {
  const respEl = document.getElementById("aiChatResponse");
  respEl.innerHTML = `<em>🤖 Çiftlik dijital ikizi taranıyor ve analiz ediliyor...</em>`;

  try {
    const res = await fetch("/api/assistant/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: query })
    });
    if (!res.ok) throw new Error("API not available, fallback to client AI");
    const data = await res.json();
    
    let formatted = data.answer
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');

    respEl.innerHTML = formatted;
  } catch (err) {
    // 100% resilient client-side AI Danisman
    const clientAns = processClientAiQuery(query);
    respEl.innerHTML = clientAns;
  }
}

function renderRtlsMap(gridData) {
  const svg = document.getElementById("rtlsBarnSvg");
  if (!svg || !gridData.cells) return;

  const w = 520;
  const h = 300;
  const scaleX = w / gridData.width_m;
  const scaleY = h / gridData.height_m;

  let cellElements = "";
  gridData.cells.forEach(c => {
    const cx = c.center_x_m * scaleX;
    const cy = c.center_y_m * scaleY;
    const cellW = (gridData.width_m / 8) * scaleX;
    const cellH = (gridData.height_m / 5) * scaleY;
    const x = cx - cellW / 2;
    const y = cy - cellH / 2;

    let fillColor = "rgba(5, 150, 105, 0.35)";
    if (c.thi_index >= 78.0) fillColor = "rgba(220, 38, 38, 0.45)";
    else if (c.thi_index >= 72.0) fillColor = "rgba(217, 119, 6, 0.40)";

    cellElements += `
      <rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" fill="${fillColor}" stroke="rgba(255,255,255,0.04)"/>
      <text x="${cx}" y="${cy + 3}" fill="rgba(255,255,255,0.3)" font-size="8" text-anchor="middle">${c.thi_index}</text>
    `;
  });

  let fanElements = "";
  gridData.fans.forEach(f => {
    const fx = f.x * scaleX;
    const fy = f.y * scaleY;
    fanElements += `
      <circle cx="${fx}" cy="${fy}" r="14" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="${fx}" y="${fy + 4}" fill="#38bdf8" font-size="12" text-anchor="middle">🌀</text>
    `;
  });

  let cowElements = "";
  gridData.positions.forEach(p => {
    const px = p.x_m * scaleX;
    const py = p.y_m * scaleY;
    const isCritical = p.health_status === "CRITICAL";
    const dotColor = isCritical ? "#f43f5e" : "#10b981";

    cowElements += `
      <g style="cursor: pointer;" onclick="openXaiModal('${p.animal_id}')">
        <title>${p.name} (${p.animal_id}) • Sağlık: ${p.health_status === 'CRITICAL' ? 'Acil / Revir' : 'Sağlıklı'} • XAI Detayı için tıklayın</title>
        ${isCritical ? `<circle cx="${px}" cy="${py}" r="14" class="radar-pulse-ring" fill="none" stroke="#f43f5e" stroke-width="1.8" />` : ''}
        <circle cx="${px}" cy="${py}" r="7.5" fill="${dotColor}" stroke="#ffffff" stroke-width="2" />
        <rect x="${px - 26}" y="${py - 20}" width="52" height="13" rx="3" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.18)" stroke-width="0.5"/>
        <text x="${px}" y="${py - 10}" fill="#f1f5f9" font-size="8.5" font-weight="600" text-anchor="middle">
          🐄 ${p.name}
        </text>
      </g>
    `;
  });

  let robotElements = "";
  if (currentFarmState && currentFarmState.robotics) {
    const rob = currentFarmState.robotics;
    if (rob.pusher) {
      const rx = rob.pusher.x_m * scaleX;
      const ry = rob.pusher.y_m * scaleY;
      robotElements += `
        <g transform="translate(${rx.toFixed(1)}, ${ry.toFixed(1)})" style="cursor: pointer;" onclick="openRoboticsModal()">
          <title>Juno-X Otonom Yem İtici • Batarya: %${rob.pusher.battery_pct} • Filo Yönetimi için tıklayın</title>
          <circle cx="0" cy="0" r="12" fill="rgba(56,189,248,0.35)" stroke="#38bdf8" stroke-width="2"/>
          <text x="0" y="4" font-size="11" text-anchor="middle">🚜</text>
          <rect x="-30" y="-23" width="60" height="12" rx="3" fill="rgba(15,23,42,0.85)" stroke="#38bdf8" stroke-width="0.5"/>
          <text x="0" y="-14" fill="#38bdf8" font-size="7.5" font-weight="bold" text-anchor="middle">Juno (Yem)</text>
        </g>
      `;
    }
    if (rob.collector) {
      const mx = rob.collector.x_m * scaleX;
      const my = rob.collector.y_m * scaleY;
      robotElements += `
        <g transform="translate(${mx.toFixed(1)}, ${my.toFixed(1)})" style="cursor: pointer;" onclick="openRoboticsModal()">
          <title>Discovery-Vac Otonom Gübre Robotu • Tank: %${rob.collector.tank_fill_pct} • Filo Yönetimi için tıklayın</title>
          <circle cx="0" cy="0" r="12" fill="rgba(245,158,11,0.35)" stroke="#f59e0b" stroke-width="2"/>
          <text x="0" y="4" font-size="11" text-anchor="middle">🧹</text>
          <rect x="-40" y="10" width="80" height="12" rx="3" fill="rgba(15,23,42,0.85)" stroke="#f59e0b" stroke-width="0.5"/>
          <text x="0" y="19" fill="#f59e0b" font-size="7.5" font-weight="bold" text-anchor="middle">Discovery (Gübre)</text>
        </g>
      `;
    }
  }

  svg.innerHTML = `
    ${cellElements}
    ${fanElements}
    ${cowElements}
    ${robotElements}
  `;
}

function renderUI(state) {
  // 1. Header indicators
  document.getElementById("simTick").textContent = state.simulation_tick;
  const simDate = new Date(state.current_time);
  document.getElementById("simTime").textContent = simDate.toLocaleTimeString("tr-TR");

  const scenarioBadge = document.getElementById("activeScenarioBadge");
  if (state.active_scenario === "heatwave") {
    scenarioBadge.textContent = "🔥 Barınak Isı Dalgası Aktif";
    scenarioBadge.className = "badge danger";
  } else if (state.active_scenario === "mastitis") {
    scenarioBadge.textContent = "🦠 Mastitis Semptom Simülasyonu";
    scenarioBadge.className = "badge danger";
  } else if (state.active_scenario === "estrus") {
    scenarioBadge.textContent = "⚡ Kızgınlık Belirtisi Simülasyonu";
    scenarioBadge.className = "badge warning";
  } else if (state.active_scenario === "ration_optimize") {
    scenarioBadge.textContent = "🌿 RuFaS Rasyon Optimizasyonu (Metan -%16)";
    scenarioBadge.className = "badge success";
  } else if (state.active_scenario === "lameness") {
    scenarioBadge.textContent = "🦶 3D Kamera: Topallık Tespiti";
    scenarioBadge.className = "badge danger";
  } else if (state.active_scenario === "sara") {
    scenarioBadge.textContent = "🧪 Rumen Asidozu / SARA Tespiti";
    scenarioBadge.className = "badge danger";
  } else {
    scenarioBadge.textContent = "Standart Operasyon (Nominal)";
    scenarioBadge.className = "badge";
  }

  // Edge Gateway Indicator
  const edgeDot = document.getElementById("edgeDot");
  const edgeLabel = document.getElementById("edgeStatusLabel");
  const edgeModeBadge = document.getElementById("edgeModeBadge");
  if (state.edge_gateway) {
    if (state.edge_gateway.is_online) {
      edgeDot.className = "edge-dot online";
      edgeLabel.textContent = "📡 Edge: Bulut Aktif";
      edgeModeBadge.textContent = "Bulut Entegrasyonu Aktif";
      edgeModeBadge.style.color = "var(--text-secondary)";
    } else {
      edgeDot.className = "edge-dot offline";
      edgeLabel.textContent = `📴 Kırsal Kesinti (${state.edge_gateway.offline_buffered_packets} paket tamponda)`;
      edgeModeBadge.textContent = "Offline-First Yerel Eşleme";
      edgeModeBadge.style.color = "#fb7185";
    }
  }

  // 2. Financial Twin & ROI Dashboard
  if (state.financials) {
    document.getElementById("kpiPaybackYears").textContent = `${state.financials.estimated_payback_period_years.toFixed(1)} Yıl`;
    document.getElementById("finDailyRevenue").textContent = `${Math.round(state.financials.daily_gross_milk_revenue).toLocaleString('tr-TR')} TL`;
    document.getElementById("finDailyFeedCost").textContent = `${Math.round(state.financials.daily_total_feed_cost).toLocaleString('tr-TR')} TL`;
    document.getElementById("finDailyMargin").textContent = `+${Math.round(state.financials.daily_net_margin_over_feed).toLocaleString('tr-TR')} TL`;
    document.getElementById("finMonthlyBenefit").textContent = `+${Math.round(state.financials.total_monthly_net_benefit).toLocaleString('tr-TR')} TL/ay`;
    document.getElementById("finSavingsBreakdown").textContent = 
      `Yem Tasarrufu: +${Math.round(state.financials.monthly_feed_savings_from_optimization).toLocaleString('tr-TR')} TL | Önlenen Kayıp: +${Math.round(state.financials.prevented_disease_losses_monthly + state.financials.prevented_estrus_losses_monthly).toLocaleString('tr-TR')} TL`;
  }

  // 3. Top KPIs
  document.getElementById("kpiTotalAnimals").textContent = `${state.animals.length} Baş`;

  let healthyCount = 0;
  let warningCount = 0;
  let criticalCount = 0;
  let maxThi = 0;

  state.animals.forEach(a => {
    if (a.dss.overall_health_status === "HEALTHY") healthyCount++;
    else if (a.dss.overall_health_status === "WARNING") warningCount++;
    else if (a.dss.overall_health_status === "CRITICAL") criticalCount++;
  });

  const kpiHealthVal = document.getElementById("kpiHealthStatus");
  const kpiHealthAlerts = document.getElementById("kpiHealthAlerts");
  kpiHealthVal.textContent = `${healthyCount} / ${state.animals.length} Sağlıklı`;
  
  if (criticalCount > 0) {
    kpiHealthVal.style.color = "var(--accent-rose)";
    kpiHealthAlerts.textContent = `🚨 ${criticalCount} hayvan acil müdahale / revir bekliyor!`;
  } else if (warningCount > 0) {
    kpiHealthVal.style.color = "var(--accent-amber)";
    kpiHealthAlerts.textContent = `⚠️ ${warningCount} hayvanda dikkat gerektiren sapma var.`;
  } else {
    kpiHealthVal.style.color = "var(--accent-emerald)";
    kpiHealthAlerts.textContent = `Tüm parametreler referans aralığında.`;
  }

  // Max THI across zones
  state.barn_zones.forEach(z => {
    if (z.thi_index > maxThi) maxThi = z.thi_index;
  });
  const kpiMaxThi = document.getElementById("kpiMaxThi");
  const kpiThiStatus = document.getElementById("kpiThiStatus");
  kpiMaxThi.innerHTML = `${maxThi.toFixed(1)} <small>THI</small>`;
  if (maxThi >= 79) {
    kpiMaxThi.style.color = "var(--accent-rose)";
    kpiThiStatus.textContent = "Şiddetli Isı Stresi! Fan + Sisleme Aktif";
  } else if (maxThi >= 72) {
    kpiMaxThi.style.color = "var(--accent-amber)";
    kpiThiStatus.textContent = "Orta Isı Stresi: Fanlar Devrede";
  } else {
    kpiMaxThi.style.color = "var(--text-primary)";
    kpiThiStatus.textContent = "Konfor Aralığında (<72 THI)";
  }

  // Sorting Gate KPI & Visuals
  const gateKpi = document.getElementById("kpiGateStatus");
  const gateKpiDetail = document.getElementById("kpiGateDetail");
  const gateVisualBox = document.getElementById("gateVisualBox");
  const gateVisualIndicator = document.getElementById("gateVisualIndicator");
  const gateVisualArrow = document.getElementById("gateVisualArrow");
  const treatmentPenText = document.getElementById("treatmentPenText");

  const divertedAnimal = state.animals.find(a => a.gate_assignment === "TREATMENT_PEN");

  if (state.sorting_gate.status === "ROUTING_TREATMENT" || divertedAnimal) {
    gateKpi.textContent = "REVİRE YÖNLENDİRME";
    gateKpi.style.color = "var(--accent-rose)";
    gateKpiDetail.textContent = `Müdahale: ${state.sorting_gate.last_diverted_animal_id || (divertedAnimal ? divertedAnimal.id : "")} ayrıldı`;
    
    gateVisualBox.classList.add("divert-active");
    gateVisualIndicator.textContent = "⚠️ REVİR BÖLMESİNE YÖNLENDİRİLDİ";
    gateVisualArrow.textContent = "➡️ Revir İzolasyonuna Sevk";
    treatmentPenText.innerHTML = `<strong style="color:var(--accent-rose);">${divertedAnimal ? divertedAnimal.name + ' (' + divertedAnimal.id + ')' : '1 Hayvan'}</strong> tedaviye alındı`;
  } else {
    gateKpi.textContent = "NORMAL AKIŞ";
    gateKpi.style.color = "var(--accent-emerald)";
    gateKpiDetail.textContent = "Tüm hayvanlar dinlenme barınağına dönüyor";

    gateVisualBox.classList.remove("divert-active");
    gateVisualIndicator.textContent = "NORMAL DÖNÜŞ YOLU";
    gateVisualArrow.textContent = "⬇️ Barınak Ana Bölümüne";
    treatmentPenText.textContent = "0 Hayvan (Revir Boş)";
  }

  // Milking Robot status
  const milkTankLabel = document.getElementById("milkTankStatusLabel");
  const hasActiveTreatment = state.edge_gateway && state.edge_gateway.active_treatments && state.edge_gateway.active_treatments.length > 0;
  if (hasActiveTreatment) {
    milkTankLabel.innerHTML = `<strong style="color:var(--accent-rose);">🔒 TANK KİLİTLİ:</strong> İlaç kalıntısı nedeniyle süt atık hattına veriliyor`;
  } else {
    milkTankLabel.textContent = "Optik iletkenlik & debi sensörleri aktif";
  }

  // 4. Render Herd Cards Grid
  const herdGrid = document.getElementById("herdCardsGrid");
  herdGrid.innerHTML = "";

  state.animals.forEach(animal => {
    const card = document.createElement("div");
    let statusClass = "healthy";
    let badgeLabel = "Sağlıklı";

    const isLame = animal.vision && animal.vision.lameness.score >= 3.0;
    const isSara = animal.rumen && animal.rumen.assessment.sara_risk_score >= 0.60;

    if (animal.dss.overall_health_status === "CRITICAL") {
      statusClass = "critical";
      if (isSara) badgeLabel = "🧪 SARA Asidoz Alarmı";
      else if (isLame) badgeLabel = "🦶 Topallık Alarmı";
      else badgeLabel = "🚨 Mastitis Alarmı";
    } else if (animal.dss.overall_health_status === "WARNING") {
      statusClass = "warning";
      badgeLabel = animal.dss.estrus_probability > 0.7 ? "⚡ Kızgınlık / Estrus" : "⚠️ Dikkat";
    }

    card.className = `animal-card ${statusClass}`;
    card.onclick = () => openXaiModal(animal.id);

    const isHighCond = animal.latest_milking.conductivity_ms_cm > 5.8;
    const isLowRum = animal.telemetry.rumination_minutes_2h < 18;
    const isHighTemp = animal.telemetry.body_temperature_c > 39.1;
    const isHighAct = animal.telemetry.activity_index > 75;

    const bcsVal = animal.vision ? animal.vision.bcs.score.toFixed(2) : "3.25";
    const lameVal = animal.vision ? animal.vision.lameness.score.toFixed(1) : "1.0";
    const isLameAlert = animal.vision && animal.vision.lameness.score >= 2.5;
    const rumenPh = animal.rumen ? animal.rumen.telemetry.rumen_ph.toFixed(2) : "6.45";

    card.innerHTML = `
      <div class="card-top">
        <div class="cow-id-tag">
          <span style="font-size: 1.2rem;">🐄</span>
          <div>
            <strong>${animal.name}</strong> <span style="font-family: var(--font-mono); font-size:0.8rem; color: var(--text-muted);">(${animal.id})</span>
            <div class="cow-meta">Lakt ${animal.lactation_number} • <span data-academic-key="dim">DIM: ${animal.days_in_milk}g</span> • <strong data-academic-key="bcs">BCS: ${bcsVal}</strong> • <strong data-academic-key="lameness" style="color:${isLameAlert ? 'var(--accent-rose)' : 'inherit'};">Topallık: Skor ${lameVal}</strong> • <strong data-academic-key="rumen_ph" style="color:${isSara ? 'var(--accent-rose)' : '#38bdf8'};">pH: ${rumenPh}</strong></div>
          </div>
        </div>
        <span class="status-badge ${statusClass}" data-academic-key="${isSara ? 'sara' : (isLame ? 'lameness' : 'scc')}">${badgeLabel}</span>
      </div>

      <div class="telemetry-strip">
        <div class="telem-item ${isHighCond ? 'alert-val' : ''}" data-academic-key="conductivity">
          <span>İletkenlik:</span>
          <strong>${animal.latest_milking.conductivity_ms_cm.toFixed(2)} mS/cm</strong>
        </div>
        <div class="telem-item ${isLowRum ? 'alert-val' : ''}" data-academic-key="rumination">
          <span>Geviş Süresi:</span>
          <strong>${animal.telemetry.rumination_minutes_2h} dk/2sa</strong>
        </div>
        <div class="telem-item ${isHighTemp ? 'alert-val' : ''}" data-academic-key="rumen_temp">
          <span>Vücut Isısı:</span>
          <strong>${animal.telemetry.body_temperature_c.toFixed(1)}°C</strong>
        </div>
        <div class="telem-item ${isHighAct ? 'warning-val' : ''}" data-academic-key="dystocia">
          <span>Aktivite:</span>
          <strong>${animal.telemetry.activity_index} adım/sa</strong>
        </div>
      </div>

      <div class="dss-summary-row">
        <span>Sağım: <strong>${animal.latest_milking.yield_kg} kg</strong> | Metan: <strong>${animal.physiology ? Math.round(animal.physiology.enteric_methane_g_day) : '--'}g/gün</strong></span>
        <div class="xai-preview">
          <span>🔍 Rumen & 3D XAI İncele</span>
        </div>
      </div>
    `;
    herdGrid.appendChild(card);
  });

  if (selectedAnimal) {
    const updated = state.animals.find(a => a.id === selectedAnimal.id);
    if (updated) renderModalDetails(updated);
  }
}

function openXaiModal(animalId) {
  if (!currentFarmState) return;
  const animal = currentFarmState.animals.find(a => a.id === animalId);
  if (!animal) return;
  selectedAnimal = animal;
  renderModalDetails(animal);
  document.getElementById("xaiModal").classList.add("active");
}

function renderModalDetails(animal) {
  document.getElementById("modalAnimalTitle").textContent = `${animal.name} (${animal.id}) - Dijital İkiz Fizyoloji & XAI`;

  const dssBox = document.getElementById("modalDssBox");
  const statusBadge = document.getElementById("modalStatusBadge");
  const recEl = document.getElementById("modalRecommendation");
  const summaryEl = document.getElementById("modalDecisionSummary");
  const drugBox = document.getElementById("drugWithdrawalBox");

  const treatments = currentFarmState.edge_gateway ? currentFarmState.edge_gateway.active_treatments : [];
  const activeTx = treatments.find(t => t.animal_id === animal.id);
  if (activeTx) {
    drugBox.style.display = "flex";
  } else {
    drugBox.style.display = "none";
  }

  const isLame = animal.vision && animal.vision.lameness.score >= 3.0;
  const isSara = animal.rumen && animal.rumen.assessment.sara_risk_score >= 0.60;

  if (animal.dss.overall_health_status === "CRITICAL") {
    dssBox.className = "dss-summary-card danger";
    if (isSara) {
      statusBadge.textContent = `KRİTİK ALARM - SUBAKUT RUMEN ASİDOZU (SARA): pH ${animal.rumen.telemetry.rumen_ph.toFixed(2)}`;
      recEl.textContent = "🎯 Otonom Eylem: Akıllı Kapı ile Revire Sevk & Rasyona 150g Sodyum Bikarbonat Takviyesi";
      summaryEl.textContent = "Retikulo-rumen bolus sensörü pH değerinin kritik 5.80 eşiğinin altında kaldığını ve A:P oranının lif fermantasyonu aleyhine bozulduğunu saptadı.";
    } else if (isLame) {
      statusBadge.textContent = `KRİTİK UYARI - TOPALLIK SKORU: ${animal.vision.lameness.score.toFixed(1)} / 5.0`;
      recEl.textContent = "🎯 Otonom Eylem: Akıllı Kapı ile Tırnak Bakım / Revir Sehpasına Sevk";
      summaryEl.textContent = "3D derinlik kamerası sırt çizgisinde belirgin kamburluk (%65) ve sol arka tırnak lezyonu tespit etti.";
    } else {
      statusBadge.textContent = `KRİTİK ALARM - MASTİTİS RİSKİ: %${Math.round(animal.dss.mastitis_risk_score * 100)}`;
      recEl.textContent = "🎯 Otonom Eylem: Otomatik Ayırma Kapısı ile Revire Sevk Edildi";
      summaryEl.textContent = "Süt elektriksel iletkenliğinde aşırı artış, beklenen Wood laktasyon eğrisinden sapma ve akut geviş düşüşü.";
    }
  } else if (animal.dss.overall_health_status === "WARNING") {
    dssBox.className = "dss-summary-card";
    if (animal.dss.estrus_probability > 0.7) {
      statusBadge.textContent = `KIZGINLIK (ESTRUS) TESPİTİ: %${Math.round(animal.dss.estrus_probability * 100)}`;
      recEl.textContent = "🎯 Öneri: 8-12 Saat İçerisinde Suni Tohumlama Gerçekleştirilmeli";
      summaryEl.textContent = "Lokomotor aktivitede belirgin artış ve yeme başında kızgınlık paterni.";
    } else {
      statusBadge.textContent = `DİKKAT / ERKEN UYARI`;
      recEl.textContent = "🎯 Öneri: Fizyolojik Trendleri Takip Et";
      summaryEl.textContent = "Hafif adım asimetrisi veya çevresel sıcaklık-nem dalgalanması tespit edildi.";
    }
  } else {
    dssBox.className = "dss-summary-card";
    statusBadge.textContent = "NORMAL / SAĞLIKLI";
    statusBadge.style.background = "var(--accent-emerald)";
    recEl.textContent = "🎯 Öneri: Standart Bakım & Sağım Rutinine Devam";
    summaryEl.textContent = "Rumen fermantasyonu, 3D yürüyüş profili, BCS ve Wood laktasyon eğrisi nominal tolerans dahilindedir.";
  }

  // Render 3D Computer Vision AI Section
  renderVisionAnalysis(animal);

  // Render Rumen Biochemical Section (Phase 8)
  renderRumenAnalysis(animal);

  // Render 4-Quarter Robotic Milking Section (Phase 10)
  renderRoboticQuarterSection(animal);

  // Render Wood Curve
  renderWoodCurveSvg(animal);

  // Render Physiological Grid
  if (animal.physiology) {
    document.getElementById("modalDmiVal").textContent = `${animal.physiology.dry_matter_intake_kg.toFixed(1)} kg/gün`;
    const eb = animal.physiology.net_energy_balance_mcal;
    const ebEl = document.getElementById("modalEbVal");
    ebEl.textContent = `${eb > 0 ? '+' : ''}${eb.toFixed(1)} Mcal/gün`;
    ebEl.style.color = eb < -3.0 ? "var(--accent-rose)" : "var(--accent-emerald)";
    document.getElementById("modalCh4Val").textContent = `${Math.round(animal.physiology.enteric_methane_g_day)} g CH₄/gün`;
    document.getElementById("modalIntensityVal").textContent = `${animal.physiology.methane_intensity_g_per_kg_milk.toFixed(1)} g/kg süt`;
  }

  // Render XAI Factors
  const factorsList = document.getElementById("modalFactorsList");
  factorsList.innerHTML = "";
  if (animal.dss.xai_explanations.length === 0) {
    factorsList.innerHTML = `<div style="font-size:0.85rem; color:var(--text-muted); padding:0.5rem;">Herhangi bir anomali faktörü saptanmadı. Model kararı %100 sağlıklı zeminindedir.</div>`;
  } else {
    animal.dss.xai_explanations.forEach(f => {
      const item = document.createElement("div");
      item.className = "factor-item";
      const weightPct = Math.round(f.impact_weight * 100);
      item.innerHTML = `
        <div class="factor-top">
          <strong>${f.metric}</strong>
          <span style="font-family: var(--font-mono); font-size:0.8rem; color:#f87171;">Karar Ağırlığı: %${weightPct}</span>
        </div>
        <div class="factor-weight-bar">
          <div class="factor-fill" style="width: ${weightPct}%;"></div>
        </div>
        <div class="factor-desc">
          <span>Gözlemlenen: <strong>${f.observed_value}</strong> (Ref: ${f.baseline_value})</span><br>
          <em>${f.description}</em>
        </div>
      `;
      factorsList.appendChild(item);
    });
  }

  // Render Telemetry Comparison Table
  const tbody = document.getElementById("modalTelemetryTable");
  const lamenessScore = animal.vision ? animal.vision.lameness.score : 1.0;
  const rumenPh = animal.rumen ? animal.rumen.telemetry.rumen_ph : 6.45;

  tbody.innerHTML = `
    <tr>
      <td>Rumen Sıvısı pH (Bolus)</td>
      <td><strong>pH ${rumenPh.toFixed(2)}</strong></td>
      <td>6.20 - 6.80</td>
      <td>${rumenPh < 5.80 ? '<span style="color:var(--accent-rose); font-weight:700;">🚨 SARA Asidoz Tehlikesi</span>' : '✅ Dengeli Fermantasyon'}</td>
    </tr>
    <tr>
      <td>Topallık & Yürüyüş Skoru</td>
      <td><strong>Skor ${lamenessScore.toFixed(1)} / 5.0</strong></td>
      <td>Skor 1.0 (Düz Sırt)</td>
      <td>${lamenessScore >= 2.5 ? '<span style="color:var(--accent-rose); font-weight:700;">⚠️ Topallık / Tırnak Ağrısı</span>' : '✅ Normal'}</td>
    </tr>
    <tr>
      <td>Vücut Kondisyonu (BCS)</td>
      <td><strong>${animal.vision ? animal.vision.bcs.score.toFixed(2) : '3.25'}</strong></td>
      <td>3.00 - 3.25</td>
      <td>${(animal.vision && animal.vision.bcs.score < 2.75) ? '<span style="color:var(--accent-rose);">⚠️ Zayıflık / NEB</span>' : '✅ İdeal'}</td>
    </tr>
    <tr>
      <td>Elektriksel İletkenlik</td>
      <td><strong>${animal.latest_milking.conductivity_ms_cm.toFixed(2)} mS/cm</strong></td>
      <td>5.00 - 5.50 mS/cm</td>
      <td>${animal.latest_milking.conductivity_ms_cm > 5.8 ? '<span style="color:var(--accent-rose); font-weight:700;">⚠️ Yüksek Sapma</span>' : '✅ Normal'}</td>
    </tr>
    <tr>
      <td>Geviş Getirme Süresi</td>
      <td><strong>${animal.telemetry.rumination_minutes_2h} dk / 2sa</strong></td>
      <td>24 - 30 dk / 2sa</td>
      <td>${animal.telemetry.rumination_minutes_2h < 18 ? '<span style="color:var(--accent-rose); font-weight:700;">⚠️ Düşük</span>' : '✅ Normal'}</td>
    </tr>
  `;
}

// Render Rumen Biochemical & SARA Section (Phase 8)
function renderRumenAnalysis(animal) {
  if (!animal.rumen) return;

  const r = animal.rumen;
  const isSara = r.assessment.sara_risk_score >= 0.60;

  const saraBadge = document.getElementById("rumenSaraBadge");
  saraBadge.textContent = isSara ? "🚨 SARA ASİDOZ ALARMI" : "✅ RUMEN SAĞLIKLI";
  saraBadge.className = isSara ? "badge danger" : "badge success";

  const phValEl = document.getElementById("modalRumenPhVal");
  phValEl.textContent = r.telemetry.rumen_ph.toFixed(2);
  phValEl.style.color = r.telemetry.rumen_ph < 5.80 ? "var(--accent-rose)" : "#38bdf8";

  document.getElementById("modalVfaVal").textContent = `${Math.round(r.telemetry.total_vfa_mmol_l)} mmol/L`;
  document.getElementById("modalApRatioVal").textContent = `${r.telemetry.acetate_to_propionate_ratio.toFixed(2)} (${r.telemetry.acetate_to_propionate_ratio < 2.2 ? 'Bozulmuş' : 'İdeal'})`;
  document.getElementById("modalRumenTempVal").textContent = `${r.telemetry.rumen_temperature_c.toFixed(1)}°C`;
  document.getElementById("modalRumenMotilityVal").textContent = `${r.telemetry.rumen_contractions_per_min.toFixed(1)} /dk (${r.assessment.rumen_motility_status})`;
  document.getElementById("modalHoursLowVal").textContent = `${r.assessment.hours_below_ph_5_8.toFixed(1)} sa/gün`;

  const bufferEl = document.getElementById("modalBufferNeedVal");
  if (r.assessment.buffer_supplement_needed) {
    bufferEl.textContent = "150g NaHCO3 Ekle!";
    bufferEl.style.color = "var(--accent-rose)";
  } else {
    bufferEl.textContent = "Gerek Yok (Dengeli)";
    bufferEl.style.color = "var(--accent-emerald)";
  }

  document.getElementById("modalRumenInterp").textContent = r.assessment.clinical_interpretation;

  // Render 24h Rumen pH Curve SVG
  const svg = document.getElementById("rumenPhSvg");
  const points = r.hourly_ph_curve || [];
  if (points.length === 0) return;

  const w = 340;
  const h = 90;
  const padLeft = 30;
  const padBottom = 18;
  const padTop = 10;
  const padRight = 15;

  const chartW = w - padLeft - padRight;
  const chartH = h - padTop - padBottom;

  const minPh = 5.0;
  const maxPh = 7.0;

  // Threshold line y at pH = 5.8
  const threshY = padTop + chartH - ((5.80 - minPh) / (maxPh - minPh)) * chartH;

  // Grid lines
  let gridLines = `
    <line x1="${padLeft}" y1="${threshY}" x2="${w - padRight}" y2="${threshY}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="${padLeft - 4}" y="${threshY + 3}" fill="#ef4444" font-size="8" text-anchor="end">5.80</text>
  `;

  // Path of pH curve
  let pathD = "";
  points.forEach((p, idx) => {
    const x = padLeft + (p.hour / 23.0) * chartW;
    const y = padTop + chartH - ((p.rumen_ph - minPh) / (maxPh - minPh)) * chartH;
    pathD += `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)} `;
  });

  const curveColor = isSara ? "#f43f5e" : "#38bdf8";

  svg.innerHTML = `
    ${gridLines}
    <path d="${pathD}" fill="none" stroke="${curveColor}" stroke-width="2" stroke-linecap="round"/>
    <!-- Hour axis ticks -->
    <text x="${padLeft}" y="${h - 4}" fill="#64748b" font-size="7">00:00</text>
    <text x="${padLeft + chartW/2}" y="${h - 4}" fill="#64748b" font-size="7" text-anchor="middle">12:00</text>
    <text x="${w - padRight}" y="${h - 4}" fill="#64748b" font-size="7" text-anchor="end">23:00</text>
  `;
}

// Render 4-Quarter Robotic Milking Section (Phase 10)
function renderRoboticQuarterSection(animal) {
  if (!animal.milking_twin) return;
  const mt = animal.milking_twin;

  const badge = document.getElementById("roboticMilkingBadge");
  if (mt.is_any_quarter_diverted) {
    badge.textContent = "🚨 Robot Vana: Enfekte Lob Atığa Ayrıldı";
    badge.className = "badge danger";
  } else {
    badge.textContent = "✅ Robot Vana: 4 Lob Nominal (Ana Tank)";
    badge.className = "badge";
  }

  // Populate Audit Bar
  document.getElementById("robotTotalYieldVal").textContent = `${mt.total_yield_kg.toFixed(2)} kg`;
  document.getElementById("robotAcceptedYieldVal").textContent = `${mt.accepted_to_tank_kg.toFixed(2)} kg`;
  document.getElementById("robotDivertedYieldVal").textContent = `${mt.diverted_waste_kg.toFixed(2)} kg`;
  document.getElementById("robotWeightedSccVal").textContent = `${mt.weighted_scc.toLocaleString('tr-TR')} hücre/mL`;
  document.getElementById("robotHygieneProtocolVal").textContent = `${mt.post_dip_formula} | ${mt.teat_cup_disinfection}`;

  // Populate Quarter Item Cards
  const cardsList = document.getElementById("quarterCardsList");
  if (cardsList) {
    cardsList.innerHTML = "";
    Object.values(mt.quarters).forEach(q => {
      const isDiv = q.valve_destination === "SEPARATION_DRAIN";
      const card = document.createElement("div");
      card.className = `quarter-item-card ${isDiv ? 'diverted' : ''}`;
      card.innerHTML = `
        <div class="q-card-header">
          <strong>${q.quarter_name_tr} (${q.quarter_id})</strong>
          <span class="q-valve-badge ${isDiv ? 'drain' : 'tank'}">
            ${isDiv ? '⛔ ATIK VANASI' : '✅ ANA TANK'}
          </span>
        </div>
        <div class="q-metrics-row">
          <div><span>Süt Verimi:</span> <strong>${q.yield_kg.toFixed(2)} kg</strong></div>
          <div><span>Somatik Hücre (SCC):</span> <strong style="color:${q.somatic_cell_count > 400000 ? '#f43f5e' : '#6ee7b7'};">${(q.somatic_cell_count/1000).toFixed(0)}k/mL</strong></div>
          <div><span>İletkenlik:</span> <strong>${q.conductivity_ms_cm.toFixed(2)} mS/cm</strong></div>
          <div><span>Kan / Hiperkeratoz:</span> <strong>${q.blood_in_milk_ppm.toFixed(0)} ppm / Skor ${q.hyperkeratosis_score.toFixed(1)}</strong></div>
        </div>
      `;
      cardsList.appendChild(card);
    });
  }

  // Render Anatomical Udder SVG (4 Quarters)
  const udderSvg = document.getElementById("quarterUdderSvg");
  if (!udderSvg) return;

  // Quarter positions:
  // LF: Top-Left (x: 85, y: 50)
  // RF: Top-Right (x: 195, y: 50)
  // LR: Bottom-Left (x: 85, y: 110)
  // RR: Bottom-Right (x: 195, y: 110)
  const qMap = mt.quarters;
  const getColor = (qId) => {
    const q = qMap[qId];
    if (!q) return "#10b981";
    if (q.valve_destination === "SEPARATION_DRAIN") return "#f43f5e";
    if (q.somatic_cell_count > 200000 || q.conductivity_ms_cm > 5.7) return "#f59e0b";
    return "#10b981";
  };

  udderSvg.innerHTML = `
    <!-- Udder Outline -->
    <ellipse cx="140" cy="80" rx="90" ry="60" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <line x1="140" y1="20" x2="140" y2="140" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3,3"/>
    <line x1="50" y1="80" x2="230" y2="80" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3,3"/>

    <!-- Left Front (LF) -->
    <g transform="translate(95, 52)">
      <circle cx="0" cy="0" r="22" fill="${getColor('LF')}" opacity="0.25"/>
      <circle cx="0" cy="0" r="14" fill="${getColor('LF')}" stroke="#fff" stroke-width="2"/>
      <text x="0" y="4" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">LF</text>
      <text x="0" y="-18" fill="#94a3b8" font-size="8" text-anchor="middle">Sol Ön</text>
    </g>

    <!-- Right Front (RF) -->
    <g transform="translate(185, 52)">
      <circle cx="0" cy="0" r="22" fill="${getColor('RF')}" opacity="0.25"/>
      <circle cx="0" cy="0" r="14" fill="${getColor('RF')}" stroke="#fff" stroke-width="2"/>
      <text x="0" y="4" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">RF</text>
      <text x="0" y="-18" fill="#94a3b8" font-size="8" text-anchor="middle">Sağ Ön</text>
    </g>

    <!-- Left Rear (LR) -->
    <g transform="translate(95, 108)">
      <circle cx="0" cy="0" r="24" fill="${getColor('LR')}" opacity="0.25"/>
      <circle cx="0" cy="0" r="16" fill="${getColor('LR')}" stroke="#fff" stroke-width="2"/>
      <text x="0" y="4" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">LR</text>
      <text x="0" y="26" fill="#94a3b8" font-size="8" text-anchor="middle">Sol Arka</text>
    </g>

    <!-- Right Rear (RR) -->
    <g transform="translate(185, 108)">
      <circle cx="0" cy="0" r="24" fill="${getColor('RR')}" opacity="0.25"/>
      <circle cx="0" cy="0" r="16" fill="${getColor('RR')}" stroke="#fff" stroke-width="2"/>
      <text x="0" y="4" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">RR</text>
      <text x="0" y="26" fill="#94a3b8" font-size="8" text-anchor="middle">Sağ Arka</text>
    </g>
  `;
}

// Render 3D Computer Vision Analysis inside Modal
function renderVisionAnalysis(animal) {
  if (!animal.vision) return;

  const v = animal.vision;
  const isLame = v.lameness.score >= 2.5;

  // 1. Lameness Box
  const lameBox = document.getElementById("visionLamenessBox");
  const lameBadge = document.getElementById("visionLamenessBadge");
  lameBadge.textContent = `Skor ${v.lameness.score.toFixed(1)} (${isLame ? 'Topallık' : 'Normal'})`;
  if (isLame) {
    lameBadge.className = "badge danger";
    lameBox.className = "vision-box alert";
  } else {
    lameBadge.className = "badge";
    lameBox.className = "vision-box";
  }

  document.getElementById("visionCurvatureVal").textContent = `%${Math.round(v.lameness.back_curvature_index * 100)}`;
  document.getElementById("visionAsymmetryVal").textContent = `%${v.lameness.gait_asymmetry_pct.toFixed(1)}`;
  document.getElementById("visionHeadBobVal").textContent = `${v.lameness.head_bob_amplitude_cm.toFixed(1)} cm`;
  document.getElementById("visionLamenessInterp").textContent = v.lameness.clinical_interpretation;

  // Draw 3D Spine SVG
  const spineSvg = document.getElementById("visionSpineSvg");
  const spinePts = v.spine_curvature_points || [];
  if (spinePts.length > 0) {
    const w = 320;
    const h = 60;
    const baselineY = 40;

    let pathD = "";
    spinePts.forEach((p, idx) => {
      const x = (p.x_cm / 160.0) * (w - 30) + 15;
      const y = baselineY - (p.z_elevation_cm * 2.8);
      pathD += `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)} `;
    });

    const strokeColor = isLame ? "#f43f5e" : "#10b981";
    spineSvg.innerHTML = `
      <line x1="15" y1="${baselineY}" x2="${w - 15}" y2="${baselineY}" stroke="rgba(255,255,255,0.15)" stroke-dasharray="2,2"/>
      <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round"/>
      ${isLame ? `<text x="${w/2}" y="16" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">▲ Sırt Kamberleşmesi (${(v.lameness.back_curvature_index*100).toFixed(0)}%)</text>` : `<text x="${w/2}" y="16" fill="#10b981" font-size="9" text-anchor="middle">✔ Düz Sırt Çizgisi</text>`}
    `;
  }

  // 2. BCS Box
  const bcsBadge = document.getElementById("visionBcsBadge");
  bcsBadge.textContent = `BCS: ${v.bcs.score.toFixed(2)}`;
  if (v.bcs.score < 2.75) {
    bcsBadge.className = "badge danger";
  } else if (v.bcs.score > 3.5) {
    bcsBadge.className = "badge warning";
  } else {
    bcsBadge.className = "badge success";
  }

  document.getElementById("visionHookAngleVal").textContent = `${Math.round(v.bcs.angle_hooks_to_pins_deg)}°`;
  document.getElementById("visionSacralDepthVal").textContent = `${Math.round(v.bcs.sacral_cavity_depth_mm)} mm`;
  document.getElementById("visionRibFatVal").textContent = `${Math.round(v.bcs.short_rib_fat_coverage_mm)} mm`;
  document.getElementById("visionBcsInterp").textContent = v.bcs.clinical_interpretation;

  // Draw 3D Pelvic Depth SVG
  const pelvicSvg = document.getElementById("visionPelvicSvg");
  const pelvicPts = v.pelvic_depth_points || [];
  if (pelvicPts.length > 0) {
    const w = 320;
    const h = 60;
    let pathD = "";
    pelvicPts.forEach((p, idx) => {
      const x = ((p.transverse_y_cm + 40) / 80.0) * (w - 30) + 15;
      const y = 15 + ((p.depth_mm - 1445.0) / 60.0) * 35;
      pathD += `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)} `;
    });

    pelvicSvg.innerHTML = `
      <path d="${pathD}" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
      <circle cx="${w/2}" cy="42" r="3" fill="#f59e0b"/>
      <text x="${w/2}" y="55" fill="#94a3b8" font-size="8" text-anchor="middle">Kuyruk Sokumu Çukuru (${Math.round(v.bcs.sacral_cavity_depth_mm)} mm)</text>
    `;
  }
}

function renderWoodCurveSvg(animal) {
  const svg = document.getElementById("woodCurveSvg");
  document.getElementById("modalCurveDimBadge").textContent = `Mevcut DIM: ${animal.days_in_milk}. Gün (Laktasyon ${animal.lactation_number})`;
  document.getElementById("curvePeakNote").textContent = `Wood Modeli Zirvesi: ${animal.physiology.peak_dim}. Gün (${animal.physiology.peak_yield.toFixed(1)} kg/gün)`;

  const points = animal.lactation_curve || [];
  if (points.length === 0) return;

  const w = 540;
  const h = 180;
  const padLeft = 45;
  const padBottom = 25;
  const padTop = 15;
  const padRight = 20;

  const chartW = w - padLeft - padRight;
  const chartH = h - padTop - padBottom;

  const maxY = Math.max(45, ...points.map(p => p.expected_yield)) * 1.1;

  let gridLines = "";
  for (let yVal = 10; yVal <= 45; yVal += 10) {
    const yPos = padTop + chartH - (yVal / maxY) * chartH;
    gridLines += `<line x1="${padLeft}" y1="${yPos}" x2="${w - padRight}" y2="${yPos}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>`;
    gridLines += `<text x="${padLeft - 6}" y="${yPos + 3}" fill="#64748b" font-size="9" text-anchor="end">${yVal}</text>`;
  }

  for (let dimVal = 50; dimVal <= 300; dimVal += 50) {
    const xPos = padLeft + (dimVal / 305) * chartW;
    gridLines += `<line x1="${xPos}" y1="${padTop}" x2="${xPos}" y2="${padTop + chartH}" stroke="rgba(255,255,255,0.06)" />`;
    gridLines += `<text x="${xPos}" y="${h - 8}" fill="#64748b" font-size="9" text-anchor="middle">${dimVal}g</text>`;
  }

  const pathD = points.map((p, idx) => {
    const x = padLeft + (p.dim / 305) * chartW;
    const y = padTop + chartH - (p.expected_yield / maxY) * chartH;
    return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");

  const actualYieldDaily = animal.latest_milking.yield_kg * 2.0;
  const actualX = padLeft + (animal.days_in_milk / 305) * chartW;
  const actualY = padTop + chartH - (actualYieldDaily / maxY) * chartH;

  svg.innerHTML = `
    ${gridLines}
    <path d="${pathD}" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="${actualX.toFixed(1)}" cy="${actualY.toFixed(1)}" r="6" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
    <text x="${actualX.toFixed(1)}" y="${(actualY - 10).toFixed(1)}" fill="#f43f5e" font-weight="bold" font-size="10" text-anchor="middle">
      ${actualYieldDaily.toFixed(1)} kg
    </text>
  `;
}

function closeModalDirect() {
  document.getElementById("xaiModal").classList.remove("active");
  selectedAnimal = null;
}

function closeXaiModal(event) {
  if (event.target === document.getElementById("xaiModal")) {
    closeModalDirect();
  }
}

async function resolveIntervention() {
  try {
    await fetch("/api/gate/override", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "ROUTING_NORMAL" })
    });
    await triggerScenario("reset");
    closeModalDirect();
  } catch (err) {
    handleClientScenario("reset");
    closeModalDirect();
  }
}

// -------------------------------------------------------------
// Phase 9: Multi-Objective TMR Ration & Pareto Optimizer Functions
// -------------------------------------------------------------
let currentRationReport = null;
let selectedRationStrategyId = "BALANCED_PARETO";

async function openRationModal() {
  try {
    const res = await fetch("/api/ration/optimize");
    if (!res.ok) throw new Error("Rasyon verisi alınamadı");
    currentRationReport = await res.json();
    selectedRationStrategyId = currentRationReport.recommended_strategy || "BALANCED_PARETO";
    renderRationReport(currentRationReport);
    document.getElementById("rationModal").classList.add("active");
  } catch (err) {
    currentRationReport = clientRationReport;
    selectedRationStrategyId = currentRationReport.recommended_strategy || "BALANCED_PARETO";
    renderRationReport(currentRationReport);
    document.getElementById("rationModal").classList.add("active");
  }
}

function closeRationModalDirect() {
  document.getElementById("rationModal").classList.remove("active");
}

function closeRationModal(event) {
  if (event.target === document.getElementById("rationModal")) {
    closeRationModalDirect();
  }
}

function renderRationReport(report) {
  const container = document.getElementById("rationStrategiesContainer");
  if (!container) return;

  container.innerHTML = "";
  report.plans.forEach(plan => {
    const isSel = (plan.strategy_id === selectedRationStrategyId);
    const card = document.createElement("div");
    card.className = `strategy-card ${isSel ? 'selected' : ''}`;
    card.onclick = () => selectRationStrategy(plan.strategy_id);

    const badgeClass = plan.strategy_id === "MAX_PROFIT" ? "profit" : (plan.strategy_id === "ECO_LOW_METHANE" ? "eco" : "pareto");

    card.innerHTML = `
      <div>
        <span class="strategy-badge ${badgeClass}">${plan.strategy_badge}</span>
        <h4 class="strategy-title">${plan.strategy_title}</h4>
        <p class="strategy-desc">${plan.description}</p>
      </div>
      <div class="strategy-metrics">
        <div class="strat-row"><span>Günlük Yem Gideri:</span> <strong>${plan.daily_feed_cost_per_cow.toFixed(2)} TL</strong></div>
        <div class="strat-row"><span>Öngörülen Süt:</span> <strong>${plan.predicted_milk_yield_kg.toFixed(1)} kg/gün</strong></div>
        <div class="strat-row"><span>Yem Üzeri Gelir (IOFC):</span> <strong style="color:#6ee7b7;">+${plan.daily_iofc_per_cow.toFixed(2)} TL</strong></div>
        <div class="strat-row"><span>Enterik Metan:</span> <strong style="color:${plan.carbon_reduction_pct > 20 ? '#10b981' : '#f59e0b'};">${plan.enteric_methane_g_day.toFixed(1)} g (-%${plan.carbon_reduction_pct.toFixed(0)})</strong></div>
        <div class="strat-row"><span>SARA Emniyeti:</span> <strong style="color:#38bdf8;">${plan.sara_safety_index.split(' ')[0]}</strong></div>
      </div>
    `;
    container.appendChild(card);
  });

  const selectedPlan = report.plans.find(p => p.strategy_id === selectedRationStrategyId) || report.plans[0];
  renderIngredientsTable(selectedPlan);
  renderParetoFrontierSvg(report.pareto_frontier, selectedRationStrategyId);

  // Update Herd Impact Box
  document.getElementById("impactAnnualProfit").textContent = `+${report.herd_annual_profit_delta_tl.toLocaleString('tr-TR')} TL`;
  document.getElementById("impactAnnualCo2e").textContent = `-${Math.round(report.herd_annual_co2e_reduction_kg).toLocaleString('tr-TR')} kg CO₂e`;
  document.getElementById("impactCarbonCredit").textContent = `+${selectedPlan.carbon_credit_annual_savings_tl.toLocaleString('tr-TR')} TL`;
  document.getElementById("impactSaraSafety").textContent = selectedPlan.sara_safety_index;
}

function selectRationStrategy(strategyId) {
  selectedRationStrategyId = strategyId;
  if (currentRationReport) {
    renderRationReport(currentRationReport);
  }
}

function renderIngredientsTable(plan) {
  const container = document.getElementById("ingredientsListContainer");
  if (!container) return;

  let rows = plan.ingredients.map(ing => `
    <tr>
      <td><strong>${ing.name}</strong></td>
      <td>${ing.kg_dm_per_cow_day.toFixed(1)} kg</td>
      <td><strong>%${ing.percentage_of_diet.toFixed(1)}</strong></td>
      <td>${ing.daily_cost_tl.toFixed(2)} TL</td>
    </tr>
  `).join("");

  container.innerHTML = `
    <table class="ingredients-table">
      <thead>
        <tr>
          <th>Hammadde</th>
          <th>KM Miktar</th>
          <th>Rasyon Payı</th>
          <th>Maliyet</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
    <div style="margin-top:0.6rem; font-size:0.72rem; color:var(--text-secondary); display:flex; justify-content:space-between;">
      <span>Toplam KM (DMI): <strong>${plan.total_dmi_kg} kg</strong></span>
      <span>Ham Protein: <strong>%${plan.crude_protein_pct}</strong></span>
      <span>NDF Lif: <strong>%${plan.ndf_pct}</strong></span>
      <span>Nişasta: <strong>%${plan.starch_pct}</strong></span>
    </div>
  `;
}

function renderParetoFrontierSvg(points, selectedId) {
  const svg = document.getElementById("paretoFrontierSvg");
  if (!svg || !points || points.length === 0) return;

  const w = 540;
  const h = 130;
  const padL = 60;
  const padR = 40;
  const padT = 20;
  const padB = 25;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  // X axis: Cost TL/kg DM (min 6.0, max 10.5)
  // Y axis: Methane intensity g/kg milk (min 7.0, max 14.0)
  const minX = 6.5, maxX = 10.0;
  const minY = 7.0, maxY = 13.5;

  let axisLines = `
    <line x1="${padL}" y1="${padT + chartH}" x2="${w - padR}" y2="${padT + chartH}" stroke="rgba(255,255,255,0.15)"/>
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + chartH}" stroke="rgba(255,255,255,0.15)"/>
    <text x="${w - padR}" y="${h - 6}" fill="#94a3b8" font-size="9" text-anchor="end">Rasyon Maliyeti (TL / kg KM) ➔</text>
    <text x="${padL - 10}" y="${padT + 8}" fill="#94a3b8" font-size="9" text-anchor="end">Metan (g/kg süt) ⬆</text>
  `;

  // Draw dashed frontier curve
  const sortedPoints = [...points].sort((a, b) => a.cost_tl_kg_dm - b.cost_tl_kg_dm);
  const pathD = sortedPoints.map((p, i) => {
    const x = padL + ((p.cost_tl_kg_dm - minX) / (maxX - minX)) * chartW;
    const y = padT + chartH - ((p.methane_intensity_g_kg_milk - minY) / (maxY - minY)) * chartH;
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");

  let dotsHtml = "";
  sortedPoints.forEach(p => {
    const x = padL + ((p.cost_tl_kg_dm - minX) / (maxX - minX)) * chartW;
    const y = padT + chartH - ((p.methane_intensity_g_kg_milk - minY) / (maxY - minY)) * chartH;
    const isSel = (p.strategy_id === selectedId);
    const color = p.strategy_id === "MAX_PROFIT" ? "#38bdf8" : (p.strategy_id === "ECO_LOW_METHANE" ? "#10b981" : "#f59e0b");

    dotsHtml += `
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${isSel ? '8' : '5'}" fill="${color}" stroke="#fff" stroke-width="${isSel ? '3' : '1.5'}"/>
      <text x="${x.toFixed(1)}" y="${(y - 10).toFixed(1)}" fill="${color}" font-size="10" font-weight="bold" text-anchor="middle">
        ${p.name.split(' ')[0]} (${p.cost_tl_kg_dm}₺ / ${p.methane_intensity_g_kg_milk}g)
      </text>
    `;
  });

  svg.innerHTML = `
    ${axisLines}
    <path d="${pathD}" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.8" stroke-dasharray="4,4"/>
    ${dotsHtml}
  `;
}

async function applySelectedRation() {
  const btn = document.getElementById("btnApplyActiveRation");
  if (btn) btn.textContent = "⏳ Uygulanıyor...";

  try {
    const res = await fetch("/api/ration/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ strategy_id: selectedRationStrategyId })
    });
    if (!res.ok) throw new Error("Rasyon uygulanamadı");
    const data = await res.json();

    // Trigger state refresh
    await fetchState();
    closeRationModalDirect();

    // Show AI notification in chat
    const chat = document.getElementById("aiChatResponse");
    if (chat) {
      chat.innerHTML = `🌾 <strong>Rasyon Güncellendi:</strong> <code>${selectedRationStrategyId}</code> rasyonu başarıyla sürüye uygulandı. Sürünün kuru madde tüketimi, metan emisyonu ve yem maliyeti dengesi canlı olarak güncellendi.`;
    }
  } catch (err) {
    console.error("Rasyon uygulama hatası:", err);
  } finally {
    if (btn) btn.textContent = "✅ Seçilen Rasyonu Sürüye Uygula";
  }
}

// -------------------------------------------------------------
// Phase 11: Circular Biogas & Net-Zero Farm Energy Twin
// -------------------------------------------------------------
async function openEnergyModal() {
  try {
    const res = await fetch("/api/energy/biogas");
    if (!res.ok) throw new Error("Enerji verisi alınamadı");
    const energy = await res.json();
    renderEnergyModal(energy);
    document.getElementById("energyModal").classList.add("active");
  } catch (err) {
    if (clientSimState && clientSimState.energy) {
      renderEnergyModal(clientSimState.energy);
      document.getElementById("energyModal").classList.add("active");
    }
  }
}

function closeEnergyModalDirect() {
  document.getElementById("energyModal").classList.remove("active");
}

function closeEnergyModal(event) {
  if (event.target === document.getElementById("energyModal")) {
    closeEnergyModalDirect();
  }
}

function renderEnergyModal(en) {
  if (!en) return;

  // Hero
  document.getElementById("energySelfSuffVal").textContent = `%${en.chp.self_sufficiency_ratio_pct.toFixed(0)} (NET-ZERO POZİTİF)`;

  // Manure
  document.getElementById("energyManureKgVal").textContent = `${Math.round(en.manure.total_manure_kg_day).toLocaleString('tr-TR')} kg/gün`;
  document.getElementById("energyVsKgVal").textContent = `${Math.round(en.manure.volatile_solids_kg_day).toLocaleString('tr-TR')} kg/gün`;
  document.getElementById("energyNitrogenVal").textContent = `${en.manure.nitrogen_content_kg.toFixed(1)} kg N/gün`;

  // Digester
  document.getElementById("energyBiogasM3Val").textContent = `${en.digester.daily_biogas_production_m3.toFixed(1)} m³/gün`;
  document.getElementById("energyMethanePctVal").textContent = `%${en.digester.methane_content_pct.toFixed(1)} CH₄`;

  // CHP
  document.getElementById("energyChpElecVal").textContent = `${en.chp.daily_electricity_generated_kwh.toFixed(1)} kWh/gün`;
  document.getElementById("energyChpHeatVal").textContent = `${en.chp.daily_heat_generated_kwh.toFixed(1)} kWh/gün`;

  // Consumption
  document.getElementById("energyMilkingConsVal").textContent = `${en.consumption.milking_robot_kwh.toFixed(1)} kWh`;
  document.getElementById("energyCoolingConsVal").textContent = `${en.consumption.milk_cooling_tank_kwh.toFixed(1)} kWh`;
  document.getElementById("energyFanConsVal").textContent = `${en.consumption.ventilation_fans_misting_kwh.toFixed(1)} kWh`;
  document.getElementById("energyScraperConsVal").textContent = `${en.consumption.manure_scraper_lighting_kwh.toFixed(1)} kWh`;
  document.getElementById("energyTotalConsVal").textContent = `${en.consumption.total_consumption_kwh_day.toFixed(1)} kWh/gün`;
  document.getElementById("energyExportVal").textContent = `+${en.chp.net_grid_export_kwh.toFixed(1)} kWh/gün`;

  // Economics
  document.getElementById("energyAnnualElecSaveVal").textContent = `+${Math.round(en.daily_electricity_savings_tl * 365).toLocaleString('tr-TR')} TL`;
  document.getElementById("energyAnnualExportRevVal").textContent = `+${Math.round(en.daily_grid_revenue_tl * 365).toLocaleString('tr-TR')} TL`;
  document.getElementById("energyAnnualFertSaveVal").textContent = `+${Math.round(en.fertilizer.annual_chemical_fertilizer_saving_tl).toLocaleString('tr-TR')} TL`;
  document.getElementById("energyAnnualCo2OffsetVal").textContent = `${en.annual_co2_offset_tons.toFixed(1)} Ton CO₂e`;
}

// -------------------------------------------------------------
// Phase 12: Autonomous Barn Robotics Fleet Twin
// -------------------------------------------------------------
async function openRoboticsModal() {
  try {
    const res = await fetch("/api/robotics/fleet");
    if (!res.ok) throw new Error("Robotik filo verisi alınamadı");
    const rob = await res.json();
    renderRoboticsModal(rob);
    document.getElementById("roboticsModal").classList.add("active");
  } catch (err) {
    const state = currentFarmState || (typeof clientSimState !== 'undefined' ? clientSimState : null) || (typeof GITHUB_PAGES_FALLBACK_STATE !== 'undefined' ? GITHUB_PAGES_FALLBACK_STATE : null);
    if (state && state.robotics) {
      renderRoboticsModal(state.robotics);
      document.getElementById("roboticsModal").classList.add("active");
    }
  }
}

function closeRoboticsModalDirect() {
  document.getElementById("roboticsModal").classList.remove("active");
}

function closeRoboticsModal(event) {
  if (event.target === document.getElementById("roboticsModal")) {
    closeRoboticsModalDirect();
  }
}

function renderRoboticsModal(rob) {
  if (!rob) return;

  // 1. Pusher
  const p = rob.pusher;
  document.getElementById("pusherNameVal").textContent = p.name;
  document.getElementById("pusherStatusBadge").textContent = p.status === "PUSHING" ? "İtme Yapıyor" : (p.status === "OBSTACLE_AVOIDANCE" ? "İnek Bekliyor (Engel)" : p.status);
  document.getElementById("pusherBatteryVal").textContent = `%${Math.round(p.battery_pct)}`;
  document.getElementById("pusherBatteryBar").style.width = `${p.battery_pct}%`;
  document.getElementById("pusherCoordVal").textContent = `x: ${p.x_m}m, y: ${p.y_m}m`;
  document.getElementById("pusherSpeedVal").textContent = `${p.speed_m_sec} m/s`;
  document.getElementById("pusherAugerVal").textContent = `${p.auger_rpm} rpm`;
  document.getElementById("pusherFeedHeightVal").textContent = `${p.feed_height_sensor_cm} cm (Ultrasonik)`;
  document.getElementById("pusherToursVal").textContent = `${p.daily_pushes_completed} Seans / gün`;
  document.getElementById("pusherTaskDesc").textContent = p.task_description;

  // 2. Collector
  const c = rob.collector;
  document.getElementById("collectorNameVal").textContent = c.name;
  document.getElementById("collectorStatusBadge").textContent = c.status === "VACUUMING" ? "Vakumluyor" : (c.status === "DUMPING" ? "Biyogaza Boşaltıyor" : c.status);
  document.getElementById("collectorTankVal").textContent = `%${Math.round(c.tank_fill_pct)}`;
  document.getElementById("collectorTankBar").style.width = `${c.tank_fill_pct}%`;
  document.getElementById("collectorCoordVal").textContent = `x: ${c.x_m}m, y: ${c.y_m}m`;
  document.getElementById("collectorBatteryVal").textContent = `%${Math.round(c.battery_pct)}`;
  document.getElementById("collectorManureKgVal").textContent = `${Math.round(c.daily_manure_collected_kg).toLocaleString('tr-TR')} kg`;
  document.getElementById("collectorTaskDesc").textContent = c.task_description;

  // 3. Fleet Bar
  document.getElementById("fleetPowerVal").textContent = `${rob.fleet_power_draw_kw} kW (Biyogaz CHP ile Karşılanır)`;
  document.getElementById("fleetEnergyVal").textContent = `${rob.total_daily_energy_kwh} kWh/gün`;
  document.getElementById("fleetSafetyVal").textContent = rob.fleet_safety_status;
  document.getElementById("fleetAnnualVal").textContent = `+${Math.round(rob.fleet_economic_value_annual_tl).toLocaleString('tr-TR')} TL/yıl`;
}

async function sendRobotAction(robotId, command) {
  try {
    const res = await fetch("/api/robotics/command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ robot_id: robotId, command: command })
    });
    if (!res.ok) throw new Error("Komut iletilemedi");
    const data = await res.json();

    const chat = document.getElementById("aiChatResponse");
    if (chat) {
      chat.innerHTML = `🤖 <strong>Robot Komutu İletildi:</strong> <code>${data.robot_id}</code> için <code>${data.command}</code> talimatı otonom navigasyona aktarıldı.`;
    }

    await fetchState();
    const updatedRes = await fetch("/api/robotics/fleet");
    if (updatedRes.ok) {
      renderRoboticsModal(await updatedRes.json());
    }
  } catch (err) {
    console.error("Robot komut hatası:", err);
  }
}

// ========================================================
// FAZ 14: DOĞUMHANE, DİSTOSİ ERKEN UYARI & BUZAĞI İKİZİ
// ========================================================
async function openCalvingModal() {
  const modal = document.getElementById("calvingModal");
  if (!modal) return;
  modal.classList.add("active");

  try {
    const res = await fetch("/api/calving/summary");
    if (!res.ok) throw new Error("Doğumhane özeti alınamadı");
    const mat = await res.json();
    renderCalvingModal(mat);
  } catch (err) {
    const state = currentFarmState || (typeof clientSimState !== 'undefined' ? clientSimState : null);
    if (state && state.maternity) {
      renderCalvingModal(state.maternity);
    }
  }
}

function closeCalvingModal(e) {
  if (e.target.id === "calvingModal") {
    closeCalvingModalDirect();
  }
}

function closeCalvingModalDirect() {
  const modal = document.getElementById("calvingModal");
  if (modal) modal.classList.remove("active");
}

function renderCalvingModal(mat) {
  if (!mat) return;

  // KPI Bar
  document.getElementById("maternityOccupancyVal").textContent = `${mat.cows_in_maternity_pen} / ${mat.maternity_pen_capacity} İnek`;
  document.getElementById("maternity24hWindowVal").textContent = `${mat.cows_in_24h_calving_window} Baş`;
  document.getElementById("maternityAlertsVal").textContent = `${mat.dystocia_emergencies_count} Alarm`;
  document.getElementById("maternityColostrumStockVal").textContent = `${mat.colostrum_bank_stock_liters} Litre (>%22 Brix)`;
  document.getElementById("maternityCalvesVal").textContent = `${mat.nursery_calves_count} Baş (Ort. Vigor ${mat.avg_calf_vigor_score})`;

  // Focus cow (Nazlı or first twin)
  const twins = mat.calving_twins || [];
  const cowTwin = twins.find(t => t.cow_id === "TR-34-106") || twins[0];
  if (cowTwin) {
    document.getElementById("calvCowTitle").textContent = `${cowTwin.cow_name} (${cowTwin.cow_id})`;
    document.getElementById("calvGestationDays").textContent = `Gebelik: ${cowTwin.gestation_days}. Gün | Holstein`;

    const stageBadge = document.getElementById("calvStageBadge");
    const stage = cowTwin.dystocia_assessment.stage;
    stageBadge.textContent = stage === "STAGE_2_ACTIVE_EXPULSION" ? "2. Evre Ikınma" : (stage === "STAGE_1_CERVIX_DILATION" ? "1. Evre Sancı" : stage);
    stageBadge.className = cowTwin.dystocia_assessment.alert_level === "CRITICAL_DYSTOCIA_ALARM" ? "badge danger" : "badge warning";

    // Sensor metrics
    document.getElementById("calvTempVal").textContent = `${cowTwin.telemetry.body_temperature_c.toFixed(2)}°C (-${cowTwin.telemetry.temp_drop_c.toFixed(2)}°C)`;
    document.getElementById("calvTailVal").textContent = `${cowTwin.telemetry.tail_tilt_angle_deg}° (${cowTwin.telemetry.tail_raising_frequency_per_hr} sancı/saat)`;
    document.getElementById("calvRuminationVal").textContent = `-%${cowTwin.telemetry.rumination_drop_pct.toFixed(0)} Düşüş`;
    document.getElementById("calvRestlessVal").textContent = `${cowTwin.telemetry.restlessness_index.toFixed(2)} (${cowTwin.telemetry.restlessness_index > 0.6 ? 'Yüksek' : 'Normal'})`;
    document.getElementById("calvPelvicVal").textContent = cowTwin.telemetry.pelvic_ligament_relaxation;
    document.getElementById("calvTeatVal").textContent = cowTwin.telemetry.teat_strutting_score;

    // Dystocia Alert Box
    const alertBox = document.getElementById("dystociaAlertBox");
    const alertTitle = document.getElementById("dystociaAlertTitle");
    const alertDesc = document.getElementById("dystociaAlertDesc");

    if (cowTwin.dystocia_assessment.alert_level === "CRITICAL_DYSTOCIA_ALARM") {
      alertBox.className = "dystocia-alert-box";
      alertTitle.textContent = "🚨 DİSTOSİ (GÜÇ DOĞUM) ALARMI (CES 3)";
      alertDesc.textContent = `2. Evre ıkınma süresi ${cowTwin.dystocia_assessment.stage_2_duration_minutes} dk (>70 dk eşiği) ve pozisyon: ${cowTwin.dystocia_assessment.calf_presentation}`;
    } else if (cowTwin.dystocia_assessment.stage === "STAGE_1_CERVIX_DILATION") {
      alertBox.className = "dystocia-alert-box";
      alertBox.style.background = "rgba(56, 189, 248, 0.15)";
      alertBox.style.borderColor = "rgba(56, 189, 248, 0.4)";
      alertBox.style.color = "#38bdf8";
      alertTitle.textContent = "👀 DOĞUM ELİ KULAĞINDA (6-18 SAAT)";
      alertDesc.textContent = "Vücut ısısı -0.75°C düştü (P4 çekilmesi), kuyruk kalkma frekansı arttı. İneği doğum locasına alınız.";
    } else {
      alertBox.className = "dystocia-alert-box normal";
      alertTitle.textContent = "✅ GEBELİK STABİL";
      alertDesc.textContent = "Sensör telemetrisi ve pelvis gerginliği stabil normlardadır. Tahmini doğuma 3-5 gün vardır.";
    }

    // XAI List
    const xaiList = document.getElementById("calvXaiList");
    if (xaiList) {
      xaiList.innerHTML = (cowTwin.dystocia_assessment.xai_rationale || [])
        .map(x => `<li>${x}</li>`).join("");
    }
  }

  // Focus Calf
  const calfTwin = twins.find(t => t.calf !== null) || twins[twins.length - 1];
  if (calfTwin && calfTwin.calf) {
    const cf = calfTwin.calf;
    document.getElementById("calfIdVal").textContent = cf.calf_id;
    document.getElementById("calfWeightVal").textContent = `${cf.birth_weight_kg.toFixed(1)} kg`;
    document.getElementById("calfVigorVal").textContent = `${cf.vigor_apgar_score_1_10} / 10`;
    document.getElementById("calfStandVal").textContent = `${cf.time_to_stand_minutes} dakika`;
    document.getElementById("calfSuckleVal").textContent = cf.suckling_reflex;
    document.getElementById("calfStpVal").textContent = `${cf.serum_total_protein_g_dl.toFixed(1)} g/dL (Hedef \u2265 5.5)`;
    document.getElementById("calfAdgVal").textContent = `+${cf.target_adg_kg_day.toFixed(2)} kg/gün`;
  }
}

async function updateColostrumTester() {
  const brix = parseFloat(document.getElementById("inputBrix").value);
  const yieldL = parseFloat(document.getElementById("inputColYield").value);

  document.getElementById("sliderBrixVal").textContent = `%${brix.toFixed(1)}`;
  document.getElementById("sliderYieldVal").textContent = `${yieldL.toFixed(1)} Litre`;

  try {
    const res = await fetch("/api/calving/colostrum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cow_id: "TR-34-106", yield_liters: yieldL, brix_pct: brix })
    });
    if (!res.ok) throw new Error("Kolostrum testi başarısız");
    const data = await res.json();

    const pill = document.getElementById("colostrumResultPill");
    const gradeBadge = document.getElementById("colostrumGradeBadge");

    document.getElementById("colIggVal").textContent = `${data.igg_concentration_g_per_l.toFixed(1)} g/L`;
    document.getElementById("colFptVal").textContent = data.fpt_risk;
    document.getElementById("colProtocolText").textContent = `${data.feeding_protocol} ${data.colostrum_bank_action}`;

    if (data.quality_grade === "EXCELLENT_GREEN") {
      pill.className = "colostrum-result-pill excellent";
      gradeBadge.className = "badge success";
      gradeBadge.textContent = "ÜSTÜN KALİTE (YEŞİL)";
    } else if (data.quality_grade === "ADEQUATE_YELLOW") {
      pill.className = "colostrum-result-pill moderate";
      gradeBadge.className = "badge warning";
      gradeBadge.textContent = "ORTA KALİTE (SARI)";
    } else {
      pill.className = "colostrum-result-pill poor";
      gradeBadge.className = "badge danger";
      gradeBadge.textContent = "KALİTESİZ (FPT RİSKİ - KIRMIZI)";
    }
  } catch (err) {
    console.error("Kolostrum test hatası:", err);
  }
}

// ========================================================
// FAZ 13: GENOMİK SELEKSİYON, PEDİGRİ & ÇİFTLEŞTİRME İKİZİ
// ========================================================
let cachedGenomicsSummary = null;

async function openGenomicsModal() {
  const modal = document.getElementById("genomicsModal");
  if (!modal) return;
  modal.classList.add("active");

  try {
    const res = await fetch("/api/genomics/summary");
    if (!res.ok) throw new Error("Genomik özet alınamadı");
    cachedGenomicsSummary = await res.json();
    renderGenomicsModal(cachedGenomicsSummary);
  } catch (err) {
    const state = currentFarmState || (typeof clientSimState !== 'undefined' ? clientSimState : null);
    if (state && state.genomics) {
      cachedGenomicsSummary = state.genomics;
      renderGenomicsModal(cachedGenomicsSummary);
    }
  }
}

function closeGenomicsModal(e) {
  if (e.target.id === "genomicsModal") {
    closeGenomicsModalDirect();
  }
}

function closeGenomicsModalDirect() {
  const modal = document.getElementById("genomicsModal");
  if (modal) modal.classList.remove("active");
}

function renderGenomicsModal(gen) {
  if (!gen) return;

  // KPI Bar
  document.getElementById("genHerdNmVal").textContent = `$${Math.round(gen.avg_herd_net_merit).toLocaleString('tr-TR')} NM$`;
  document.getElementById("genHerdInbreedingVal").textContent = `%${gen.avg_herd_inbreeding_pct.toFixed(2)} (Güvenli < %6.25)`;
  document.getElementById("genCowCountVal").textContent = `${gen.total_genotyped_cows} Baş Holstein`;
  document.getElementById("genEliteCountVal").textContent = `${gen.elite_donors_count} Baş (Dişi Sperma)`;
  document.getElementById("genBullCountVal").textContent = `${gen.available_catalog_bulls_count} Boğa (TPI > 2900)`;

  // Default select top cow or current selection
  const selectedCowId = document.getElementById("selectGenomicCow").value || gen.top_herd_cow_id;
  document.getElementById("selectGenomicCow").value = selectedCowId;
  onCowSelectionChange(selectedCowId);
}

async function onCowSelectionChange(cowId) {
  if (!cachedGenomicsSummary) return;

  try {
    const res = await fetch(`/api/genomics/mating/${cowId}`);
    if (!res.ok) throw new Error("Eşleştirme verisi alınamadı");
    const matches = await res.json();

    const stateRes = await fetch("/api/state");
    if (stateRes.ok) {
      const state = await stateRes.json();
      const cow = state.animals.find(a => a.id === cowId);
      if (cow && cow.pedigree) {
        renderCowPedigreeDetails(cow);
      }
    }

    renderMatingBullsList(matches);
  } catch (err) {
    const state = currentFarmState || (typeof clientSimState !== 'undefined' ? clientSimState : null) || (typeof GITHUB_PAGES_FALLBACK_STATE !== 'undefined' ? GITHUB_PAGES_FALLBACK_STATE : null);
    if (state) {
      const cow = state.animals.find(a => a.id === cowId);
      if (cow && cow.pedigree) {
        renderCowPedigreeDetails(cow);
      }
      if (cachedGenomicsSummary && cachedGenomicsSummary.mating_matrix_recommendations && cachedGenomicsSummary.mating_matrix_recommendations[cowId]) {
        renderMatingBullsList(cachedGenomicsSummary.mating_matrix_recommendations[cowId]);
      }
    }
  }
}

function renderCowPedigreeDetails(cow) {
  const ped = cow.pedigree;
  document.getElementById("pedCowName").textContent = `${cow.name} (${cow.id})`;

  const catBadge = document.getElementById("pedCategoryBadge");
  catBadge.textContent = ped.breeding_category === "ELITE_DONOR" ? "ELİT VERİCİ" : (ped.breeding_category === "BEEF_CROSS_CANDIDATE" ? "ETÇİ MELEZ" : "TİCARİ DAMIZLIK");
  catBadge.className = ped.breeding_category === "ELITE_DONOR" ? "badge success" : (ped.breeding_category === "BEEF_CROSS_CANDIDATE" ? "badge warning" : "badge");

  document.getElementById("pedSireName").textContent = ped.sire_name;
  document.getElementById("pedMgsName").textContent = ped.maternal_grand_sire_name;

  const g = ped.gebv;
  document.getElementById("gebvNmVal").textContent = `$${Math.round(g.net_merit_dollars).toLocaleString('tr-TR')}`;
  document.getElementById("gebvTpiVal").textContent = g.tpi_score.toLocaleString('tr-TR');
  document.getElementById("gebvMilkVal").textContent = `+${Math.round(g.milk_yield_gebv_kg)} kg`;
  document.getElementById("gebvFatVal").textContent = `+${Math.round(g.fat_gebv_kg)} kg (+%${g.fat_gebv_pct.toFixed(2)})`;
  document.getElementById("gebvProteinVal").textContent = `+${Math.round(g.protein_gebv_kg)} kg (+%${g.protein_gebv_pct.toFixed(2)})`;
  document.getElementById("gebvScsVal").textContent = g.somatic_cell_score_gebv.toFixed(2);
  document.getElementById("gebvPlVal").textContent = `+${g.productive_life_months.toFixed(1)} Ay`;
  document.getElementById("gebvDprVal").textContent = `+${g.daughter_pregnancy_rate_pct.toFixed(1)}%`;
  document.getElementById("gebvUdcVal").textContent = `+${g.udder_composite_udc.toFixed(2)}`;
  document.getElementById("gebvFlcVal").textContent = `+${g.feet_leg_composite_flc.toFixed(2)}`;

  const recBox = document.getElementById("recessiveBox");
  const recSummary = document.getElementById("recessiveSummaryVal");
  recSummary.textContent = ped.recessives.carrier_summary;
  if (ped.recessives.hcd_cholesterol_deficiency || ped.recessives.cvm_complex_vertebral_malformation) {
    recBox.className = "recessive-status-box carrier";
    recSummary.style.color = "var(--accent-amber)";
  } else {
    recBox.className = "recessive-status-box";
    recSummary.style.color = "var(--accent-emerald)";
  }
}

function renderMatingBullsList(matches) {
  const container = document.getElementById("matingBullsList");
  if (!container) return;

  if (!matches || matches.length === 0) {
    container.innerHTML = "<p>Öneri bulunamadı.</p>";
    return;
  }

  // Top recommendation strategy badge
  const top = matches[0];
  const stratBadge = document.getElementById("matingStrategyBadge");
  if (top.recommendation_type === "SEXED_FEMALE_SEMEN") {
    stratBadge.textContent = "Dişi Cinsiyetli Sperma (%92 Düve)";
    stratBadge.className = "badge success";
  } else if (top.recommendation_type === "BEEF_ON_DAIRY") {
    stratBadge.textContent = "Etçi Melezleme (Angus)";
    stratBadge.className = "badge warning";
  } else {
    stratBadge.textContent = "Konvansiyonel Elit Boğa";
    stratBadge.className = "badge";
  }

  container.innerHTML = matches.map((m, idx) => {
    const isRank1 = m.rank === 1;
    const isForbidden = m.inbreeding_status === "FORBIDDEN_RED";
    const cardClass = isForbidden ? "bull-match-card forbidden" : (isRank1 ? "bull-match-card rank-1" : "bull-match-card");

    let statusPill = "";
    if (isForbidden) {
      statusPill = `<span class="badge danger" style="font-size:0.65rem;">⛔ ÇİFTLEŞTİRME YASAK</span>`;
    } else if (m.inbreeding_status === "WARNING_YELLOW") {
      statusPill = `<span class="badge warning" style="font-size:0.65rem;">⚠️ %${m.progeny_inbreeding_f_pct.toFixed(2)} F (Orta)</span>`;
    } else {
      statusPill = `<span class="badge success" style="font-size:0.65rem;">✅ %${m.progeny_inbreeding_f_pct.toFixed(2)} F (Güvenli)</span>`;
    }

    const rankBadge = isRank1 ? '<span style="color:#10b981; font-weight:700; margin-right:0.3rem;">★ 1. Tercih:</span>' : `<strong>#${m.rank}</strong> `;

    return `
      <div class="${cardClass}">
        <div class="bull-header-row">
          <div class="bull-name-title">
            ${rankBadge}${m.bull.bull_name}
            <small style="font-weight:400; color:var(--text-muted); margin-left:0.3rem;">(${m.bull.semen_company} - ${m.bull.naab_code})</small>
          </div>
          ${statusPill}
        </div>

        <div class="bull-metrics-row">
          <div><span>Boğa NM$:</span> <strong>$${Math.round(m.bull.gebv.net_merit_dollars).toLocaleString('tr-TR')}</strong></div>
          <div><span>Tahmini Yavru NM$:</span> <strong style="color:#38bdf8;">$${Math.round(m.expected_progeny_net_merit).toLocaleString('tr-TR')}</strong></div>
          <div><span>Yavru Süt Artışı:</span> <strong>+${Math.round(m.expected_progeny_milk_kg)} kg</strong></div>
          <div><span>Doz Fiyatı:</span> <strong>${Math.round(m.bull.price_per_dose_tl)} TL</strong></div>
        </div>

        <div class="bull-rationale-text">
          ${m.recessive_conflict ? `<span style="color:#ef4444; font-weight:700;">${m.conflict_details}</span>` : m.mating_rationale}
        </div>
      </div>
    `;
  }).join("");
}





// --- GÜNLÜK DENETİM RAPORU & ICAR ADE DIŞA AKTARIM MODÜLLERİ ---
let currentReportMarkdown = "";

async function openReportModal() {
  const modal = document.getElementById("reportModal");
  if (!modal) return;
  modal.classList.add("active");

  const metaEl = document.getElementById("reportMetaInfo");
  const renderEl = document.getElementById("reportRenderedContent");
  if (renderEl) {
    renderEl.innerHTML = "<em>📋 Günlük denetim raporu hazırlanıyor...</em>";
  }

  try {
    const res = await fetch("/api/report/daily");
    if (!res.ok) throw new Error("Backend rapor servisi ulaşılamadı");
    const data = await res.json();
    currentReportMarkdown = data.report || "";
  } catch (err) {
    // Client-side fallback generation
    currentReportMarkdown = generateDailyAuditReportMarkdown();
  }

  if (metaEl) {
    metaEl.textContent = `Rapor Tarihi: ${new Date().toLocaleString('tr-TR')} | Durum: Canlı Telemetri Doğrulandı`;
  }
  if (renderEl) {
    renderEl.innerHTML = renderMarkdownToHtml(currentReportMarkdown);
  }
}

function closeReportModal(e) {
  if (e.target.id === "reportModal") {
    closeReportModalDirect();
  }
}

function closeReportModalDirect() {
  const modal = document.getElementById("reportModal");
  if (modal) modal.classList.remove("active");
}

function copyReportText() {
  if (!currentReportMarkdown) currentReportMarkdown = generateDailyAuditReportMarkdown();
  navigator.clipboard.writeText(currentReportMarkdown).then(() => {
    const btn = document.getElementById("btnCopyReport");
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = "Kopyalandı! ✓";
      btn.style.borderColor = "#10b981";
      btn.style.color = "#10b981";
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.borderColor = "";
        btn.style.color = "";
      }, 2500);
    }
  }).catch(err => {
    console.error("Kopyalama hatası:", err);
  });
}

function downloadReportMarkdown() {
  if (!currentReportMarkdown) currentReportMarkdown = generateDailyAuditReportMarkdown();
  const dateStr = new Date().toISOString().slice(0, 10);
  const blob = new Blob([currentReportMarkdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `AgriTwin_Gunluk_Denetim_Raporu_${dateStr}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function generateDailyAuditReportMarkdown() {
  const state = currentFarmState || (typeof clientSimState !== 'undefined' ? clientSimState : null) || (typeof GITHUB_PAGES_FALLBACK_STATE !== 'undefined' ? GITHUB_PAGES_FALLBACK_STATE : {});
  const animals = (state && state.animals) || [];
  const nowStr = new Date().toLocaleString('tr-TR');

  const healthyCount = animals.filter(a => a.dss && a.dss.overall_health_status === "HEALTHY").length;
  const warningCount = animals.filter(a => a.dss && a.dss.overall_health_status === "WARNING").length;
  const criticalCount = animals.filter(a => a.dss && a.dss.overall_health_status === "CRITICAL").length;

  let lines = [
    `# 📋 AGRITWIN GÜNLÜK DİJİTAL İKİZ VE VETERİNER DENETİM RAPORU`,
    `**Rapor Tarihi:** ${nowStr} | **Çiftlik:** ${state.farm_name || 'AgriTwin Süt Çiftliği'}`,
    `**Sistem Durumu:** ${state.edge_gateway ? state.edge_gateway.connection_mode : 'ONLINE (GitHub Pages Modu)'} | **Simülasyon Adımı:** #${state.simulation_tick || 0}`,
    "",
    "---",
    "## 1. 🩺 Sürü Sağlığı ve Erken Uyarı Özeti",
    `- **Toplam Sürü Varlığı:** ${animals.length} Baş Holstein Friesian`,
    `- **Genel Sağlık Durumu:** ${healthyCount} Sağlıklı | ${warningCount} Takipte | ${criticalCount} Acil/Revir`,
    `- **Otomatik Ayırma Kapısı Durumu:** \`${state.sorting_gate ? state.sorting_gate.status : 'IDLE'}\` (Son Sevk: ${(state.sorting_gate && state.sorting_gate.last_diverted_animal_id) || 'Yok'})`,
    "",
    "| Küpe No | İsim | DIM | İletkenlik | Geviş (2sa) | Vücut Isısı | Mastitis Riski | XAI Önerisi |",
    "| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |"
  ];

  animals.forEach(a => {
    const statusEmoji = a.dss && a.dss.overall_health_status === "HEALTHY" ? "✅" : (a.dss && a.dss.overall_health_status === "WARNING" ? "⚠️" : "🚨");
    const dim = a.days_in_milk || 100;
    const cond = a.latest_milking ? a.latest_milking.conductivity_ms_cm.toFixed(2) : "5.10";
    const rum = a.telemetry ? a.telemetry.rumination_minutes_2h : 45;
    const temp = a.telemetry ? a.telemetry.body_temperature_c.toFixed(1) : "38.6";
    const mast = a.dss ? Math.round(a.dss.mastitis_risk_score * 100) : 8;
    const rec = a.dss ? a.dss.recommended_action : "STANDART_TAKIP";
    lines.push(`| \`${a.id}\` | ${a.name} | ${dim}g | ${cond} mS/cm | ${rum} dk | ${temp}°C | %${mast} ${statusEmoji} | ${rec} |`);
  });

  lines.push("");
  lines.push("---");
  lines.push("## 2. 💊 Veteriner Tedavi & İlaç Arınma Takibi (Withdrawal Management)");
  const treatments = (state.edge_gateway && state.edge_gateway.active_treatments) || [];
  if (treatments.length > 0) {
    treatments.forEach(tx => {
      lines.push(`- 🚨 **Karantina:** Hayvan \`${tx.animal_id}\` (${tx.diagnosis}) - **İlaç:** ${tx.drug_administered} | **Kalan Arınma:** ${tx.withdrawal_period_days} Gün`);
      lines.push(`  - *Otomasyon Koruması:* Sağım robotu ana tank kilidi \`AKTİF\`. Süt atık tankına imha ediliyor.`);
    });
  } else {
    lines.push("- ✅ *Aktif antibiyotik karantinasında hayvan bulunmamaktadır. Tüm süt ana soğutma tankına kabul edilmektedir.*");
  }

  lines.push("");
  lines.push("---");
  lines.push("## 3. 🤰 Doğumhane, Distosi Erken Uyarı & Kolostrum / Buzağı İkizi");
  if (state.maternity) {
    const m = state.maternity;
    lines.push(`- **Doğumhane Durumu:** ${m.status_summary}`);
    lines.push(`- **24-48 Saat İçinde Doğum Beklenen İnekler:** ${m.cows_in_24h_calving_window} Baş | **Aktif Sancı:** ${m.active_labors_count} Baş | **Distosi Alarmı:** ${m.dystocia_emergencies_count} Baş`);
    lines.push(`- **Dondurulmuş Kolostrum Bankası:** \`${m.colostrum_bank_stock_liters} Litre\` (-20°C Üstün Kalite >%22 Brix Rezervi)`);
    lines.push(`- **Buzağıhane Varlığı:** ${m.nursery_calves_count} Baş Buzağı (Ortalama Vigor Skoru: ${m.avg_calf_vigor_score}/10)`);
    if (m.calving_twins) {
      m.calving_twins.forEach(t => {
        const dys = t.dystocia_assessment;
        lines.push(`  - 🐮 **${t.cow_name} (${t.cow_id}):** Gebelik: ${t.gestation_days}. Gün | Evre: \`${dys.stage}\` | Vücut Isısı: ${t.telemetry.body_temperature_c}°C (Düşüş: ${t.telemetry.temp_drop_c}°C) | Alarm: \`${dys.alert_level}\``);
      });
    }
  }

  lines.push("");
  lines.push("---");
  lines.push("## 4. 🧬 Genomik Islah, Akrabalık Katsayısı (Inbreeding) & Çiftleştirme");
  if (state.genomics) {
    const g = state.genomics;
    lines.push(`- **Sürü Genomik Damızlık İndeksi:** $${Math.round(g.avg_herd_net_merit).toLocaleString('tr-TR')} NM$ (TPI: ${Math.round(g.avg_herd_tpi).toLocaleString('tr-TR')})`);
    lines.push(`- **Sürü Ortalama Inbreeding Oranı (F):** %${g.avg_herd_inbreeding_pct.toFixed(2)} (Eşik: <%6.25 Güvenli)`);
    lines.push(`- **Elit Dişi Sperma Adayı:** ${g.elite_donor_cows_count} Baş İnek`);
  }

  lines.push("");
  lines.push("---");
  lines.push("## 5. 🤖 Otonom Ahır Robot Filosu & Enerji İkizi");
  if (state.robotics) {
    const p = state.robotics.pusher || {};
    const c = state.robotics.collector || {};
    lines.push(`- **Juno-X Yem İtici:** Batarya %${p.battery_pct || 94} | Durum: \`${p.status || 'PUSHING_FEED'}\` | Tamamlanan Tur: ${p.daily_pushes_completed || 8} tur (DMI: +%${p.dmi_boost_pct || 3.2})`);
    lines.push(`- **Discovery-Vac Gübre Robotu:** Batarya %${c.battery_pct || 88} | Durum: \`${c.status || 'VACUUMING'}\` | Toplanan Gübre: ${c.daily_manure_collected_kg || 480} kg (Tank: %${c.tank_fill_pct || 42})`);
  }
  if (state.energy) {
    const dig = state.energy.digester || {};
    const chp = state.energy.chp || {};
    const biogas = (dig.daily_biogas_production_m3 || state.energy.biogas_production_m3_day || 213.3);
    const ch4 = (dig.methane_content_pct || state.energy.biogas_methane_content_pct || 62.5);
    const kwh = (chp.daily_electricity_generated_kwh || state.energy.chp_electricity_kwh_day || 506.6);
    const selfSuff = (chp.self_sufficiency_ratio_pct != null ? chp.self_sufficiency_ratio_pct : (state.energy.energy_self_sufficiency_pct != null ? state.energy.energy_self_sufficiency_pct : 506.6));
    lines.push(`- **Biyogaz Kojenerasyon (CHP):** ${biogas} m³/gün (%${ch4} CH₄) | Üretilen Elektrik: ${kwh} kWh/gün (Öz Yeterlilik: %${typeof selfSuff === 'number' ? selfSuff.toFixed(1) : selfSuff})`);
  }

  return lines.join("\n");
}

function renderMarkdownToHtml(md) {
  if (!md) return "";
  let html = md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^---$/gim, '<hr>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>');

  const lines = html.split('\n');
  let inTable = false;
  let tableHtml = "";
  let finalLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (line.includes(':---') || line.includes('---:')) {
        continue;
      }
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      if (!inTable) {
        inTable = true;
        tableHtml = '<table><thead><tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
      } else {
        tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
      }
    } else {
      if (inTable) {
        tableHtml += '</tbody></table>';
        finalLines.push(tableHtml);
        inTable = false;
        tableHtml = "";
      }
      if (line.startsWith('- ')) {
        finalLines.push(`<ul><li>${line.substring(2)}</li></ul>`);
      } else if (line.length > 0 && !line.startsWith('<h') && !line.startsWith('<hr')) {
        finalLines.push(`<p>${line}</p>`);
      } else {
        finalLines.push(line);
      }
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table>';
    finalLines.push(tableHtml);
  }

  return finalLines.join('\n');
}

async function exportIcarAdeJson() {
  try {
    const res = await fetch("/api/export/icar-ade");
    if (!res.ok) throw new Error("Backend export not available");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ICAR_ADE_DairyTwin_Export_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    // Client-side fallback ICAR ADE v2 export
    const adeData = generateClientIcarAdeJson();
    const blob = new Blob([JSON.stringify(adeData, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ICAR_ADE_DairyTwin_Export_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

function generateClientIcarAdeJson() {
  const state = currentFarmState || (typeof clientSimState !== 'undefined' ? clientSimState : null) || (typeof GITHUB_PAGES_FALLBACK_STATE !== 'undefined' ? GITHUB_PAGES_FALLBACK_STATE : {});
  const animals = (state && state.animals) || [];
  const now = new Date().toISOString();

  const records = animals.map(a => {
    return {
      animal: {
        country_code: "TR",
        visual_id: a.id,
        species: "BOVINE",
        breed: "HOL",
        sex: "FEMALE"
      },
      days_in_milk: a.days_in_milk || 120,
      lactation_number: a.lactation_number || 2,
      milk_recordings: a.latest_milking ? [
        {
          recording_timestamp: now,
          milking_session_id: `SESS-${a.id}-${state.simulation_tick || 1}`,
          milk_yield_kg: a.latest_milking.yield_kg,
          conductivity_ms_cm: a.latest_milking.conductivity_ms_cm,
          milking_duration_seconds: 360
        }
      ] : [],
      sensor_observations: a.telemetry ? [
        { observation_type: "RUMINATION", observation_timestamp: now, value: a.telemetry.rumination_minutes_2h, unit_of_measure: "MINUTES" },
        { observation_type: "ACTIVITY_INDEX", observation_timestamp: now, value: a.telemetry.activity_index, unit_of_measure: "STEPS_PER_HOUR" },
        { observation_type: "BODY_TEMP", observation_timestamp: now, value: a.telemetry.body_temperature_c, unit_of_measure: "CELSIUS" },
        { observation_type: "LYING_TIME", observation_timestamp: now, value: a.telemetry.lying_hours_today, unit_of_measure: "HOURS" }
      ] : [],
      health_events: a.dss ? [
        {
          event_timestamp: now,
          diagnostic_category: a.dss.overall_health_status,
          risk_score: a.dss.mastitis_risk_score,
          recommended_action: a.dss.recommended_action,
          sorting_gate_target: a.gate_assignment || "BARN_RETURN"
        }
      ] : []
    };
  });

  return {
    header: {
      specification_version: "2.0.0",
      document_id: `ICAR-DOC-${Date.now()}`,
      created_timestamp: now,
      sending_system: "AgriTwin-EdgeCore-Client-v2",
      source_farm_id: "TR-34-AGRITWIN-01"
    },
    records: records
  };
}


// --- DEMO KULLANICI GİRİŞİ, PROFİLLER & HIZLI DEMO YÖNETİMİ ---
const DEMO_PERSONAS = {
  "vet": {
    id: "vet",
    name: "Dr. Mehmet Yılmaz",
    role: "Baş Hekim",
    fullRole: "Baş Veteriner Hekim & Sürü Danışmanı",
    avatar: "🩺",
    department: "Sürü Sağlığı & Biyogüvenlik",
    permissions: ["Reçeteleme", "Karantina Kilidi", "CES Distosi DSS", "Brix IgG"],
    greeting: "Sürü klinik göstergeleri, 4-loblu robotik mastitis ve doğumhane distosi erken uyarı sistemleri yetkinizde taranmaktadır.",
    welcomeAction: "Doğum & Distosi veya Denetim Raporu panellerini inceleyebilirsiniz."
  },
  "manager": {
    id: "manager",
    name: "Selim Aksoy",
    role: "Çiftlik Müdürü",
    fullRole: "Çiftlik Yöneticisi & Kıdemli Zooteknist",
    avatar: "🚜",
    department: "Operasyon & TMR Rasyon Yönetimi",
    permissions: ["TMR Rasyon", "Robot Filosu", "Ayırma Kapısı", "Finansal ROI"],
    greeting: "TMR rasyon Pareto optimizasyonu, Juno-X yem itici ve Discovery-Vac gübre robotu otonom navigasyonda aktiftir.",
    welcomeAction: "Rasyon & Karbon İkizi veya Robot Filosu panellerini inceleyebilirsiniz."
  },
  "energy": {
    id: "energy",
    name: "Müh. Emre Demir",
    role: "Enerji Mühendisi",
    fullRole: "Biyogaz & Kojenerasyon (CHP) Mühendisi",
    avatar: "⚡",
    department: "Döngüsel Ekonomi & Kojenerasyon (CHP)",
    permissions: ["Biyogaz CHP", "%506 Öz Yeterlilik", "Net-Zero Karbon", "Bio-Gübre"],
    greeting: "Anaerobik atık fermantasyonu ve 60 kW kojenerasyon ünitesi %506 net-zero enerji fazlası üretmektedir.",
    welcomeAction: "Biyogaz & Enerji İkizi panelini inceleyebilirsiniz."
  },
  "genetics": {
    id: "genetics",
    name: "Selin Kaya",
    role: "Genetik Uzmanı",
    fullRole: "Genomik Islah & Boğa Eşleştirme Uzmanı",
    avatar: "🧬",
    department: "Genomik Damızlık & Akıllı Çiftleştirme",
    permissions: ["Net Merit (NM$)", "Pedigri Ağacı", "Inbreeding (F)", "Katalog Boğaları"],
    greeting: "Sürü genotipleri taranmış olup akrabalık katsayısı F <%6.25 güvenli sınırında tutulmaktadır.",
    welcomeAction: "Genomik & Pedigri panelini inceleyebilirsiniz."
  }
};

let currentDemoPersona = DEMO_PERSONAS["vet"];

function openDemoLoginModal() {
  const modal = document.getElementById("demoLoginModal");
  if (modal) modal.classList.add("active");
}

function closeDemoLoginModal(e) {
  if (e.target.id === "demoLoginModal") {
    closeDemoLoginModalDirect();
  }
}

function closeDemoLoginModalDirect() {
  const modal = document.getElementById("demoLoginModal");
  if (modal) modal.classList.remove("active");
}

async function selectDemoPersona(personaId) {
  const persona = DEMO_PERSONAS[personaId];
  if (!persona) return;
  currentDemoPersona = persona;

  // Update UI Persona Card highlight
  document.querySelectorAll(".persona-card").forEach(c => c.classList.remove("active"));
  const activeCard = document.getElementById(`personaCard_${personaId}`);
  if (activeCard) activeCard.classList.add("active");

  // Update Header Pill
  const avatarEl = document.getElementById("demoUserAvatar");
  const nameEl = document.getElementById("demoUserName");
  const roleEl = document.getElementById("demoUserRole");
  if (avatarEl) avatarEl.textContent = persona.avatar;
  if (nameEl) nameEl.textContent = persona.name;
  if (roleEl) roleEl.textContent = persona.role;

  // Try notifying backend if available
  try {
    await fetch("/api/demo/switch-persona", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ persona_id: personaId })
    });
  } catch (e) {}

  // Post Welcome in AI Danisman
  const chat = document.getElementById("aiChatResponse");
  if (chat) {
    chat.innerHTML = `👤 <strong>Demo Oturumu Değiştirildi:</strong> <strong>${persona.name}</strong> (${persona.fullRole}) olarak oturum açıldı.<br><br>` +
      `- <strong>Departman:</strong> ${persona.department}<br>` +
      `- <strong>Aktif Yetkiler:</strong> ${persona.permissions.map(p => `<code>${p}</code>`).join(" ")}<br>` +
      `- <strong>Sistem Durumu:</strong> ${persona.greeting}<br>` +
      `💡 <em>Öneri: ${persona.welcomeAction}</em>`;
  }
}

async function quickLaunchDemo(action) {
  closeDemoLoginModalDirect();
  if (action === "dystocia") {
    await selectDemoPersona("vet");
    await triggerScenario("dystocia");
    setTimeout(() => openCalvingModal(), 350);
  } else if (action === "mastitis") {
    await selectDemoPersona("vet");
    await triggerScenario("mastitis");
    setTimeout(() => openXaiModal("TR-34-102"), 350);
  } else if (action === "sara") {
    await selectDemoPersona("vet");
    await triggerScenario("sara");
    setTimeout(() => openXaiModal("TR-34-103"), 350);
  } else if (action === "ration") {
    await selectDemoPersona("manager");
    setTimeout(() => openRationModal(), 200);
  } else if (action === "robotics") {
    await selectDemoPersona("manager");
    setTimeout(() => openRoboticsModal(), 200);
  } else if (action === "energy") {
    await selectDemoPersona("energy");
    setTimeout(() => openEnergyModal(), 200);
  }
}

async function startGuidedDemoTour() {
  const chat = document.getElementById("aiChatResponse");
  if (chat) {
    chat.innerHTML = `🚀 <strong>AgriTwin Rehberli Demo Turu Başlatıldı!</strong><br><br>` +
      `1️⃣ <strong>Sürü & Mikroklima:</strong> 6 Baş Holstein telemetrisi ve 8x5 RTLS UWB ısı haritası canlı akıştadır.<br>` +
      `2️⃣ <strong>Fizyolojik İkiz:</strong> Geviş, rumen pH, 4 loblu sağım iletkenliği ve vücut sıcaklığı dinamik salınımdadır.<br>` +
      `3️⃣ <strong>Otonom Filo & Enerji:</strong> Juno yem itici ve Discovery vakum robotu devriye gezmekte, Biyogaz CHP %506 net-zero enerji üretmektedir.<br>` +
      `4️⃣ <strong>Akıllı DSS:</strong> Yukarıdaki <em>"Demo Girişi / Rol Değiştir"</em> butonuyla farklı profesyonel rolleri deneyimleyebilir veya başlıktaki modülleri açabilirsiniz.`;
  }
  advanceStep();
}


// ============================================================================
// ACADEMIC USER GUIDE MODAL CONTROLLER (FAZ 17)
// ============================================================================
function openGuideModal() {
  const modal = document.getElementById("guideModal");
  if (modal) {
    modal.classList.add("active");
  }
}

function closeGuideModal(event) {
  if (event.target.id === "guideModal") {
    closeGuideModalDirect();
  }
}

function closeGuideModalDirect() {
  const modal = document.getElementById("guideModal");
  if (modal) {
    modal.classList.remove("active");
  }
}

function selectGuideTab(tabId) {
  // Update sidebar active state
  const navItems = document.querySelectorAll("#guideSidebarNav .guide-nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("onclick") && item.getAttribute("onclick").includes(tabId)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Update section visibility
  const sections = document.querySelectorAll("#guideContentArea .guide-section");
  sections.forEach(sec => {
    if (sec.id === `sec-${tabId}`) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });

  // Scroll content to top
  const contentArea = document.getElementById("guideContentArea");
  if (contentArea) contentArea.scrollTop = 0;
}

function filterGuideContent(query) {
  const q = (query || "").toLowerCase().trim();
  const sections = document.querySelectorAll("#guideContentArea .guide-section");
  const navItems = document.querySelectorAll("#guideSidebarNav .guide-nav-item");

  if (!q) {
    navItems.forEach(i => i.style.display = "");
    return;
  }

  let firstMatchId = null;

  sections.forEach(sec => {
    const text = sec.textContent.toLowerCase();
    const secId = sec.id.replace("sec-", "");
    const matchingNav = Array.from(navItems).find(i => i.getAttribute("onclick") && i.getAttribute("onclick").includes(secId));

    if (text.includes(q)) {
      if (matchingNav) matchingNav.style.display = "";
      if (!firstMatchId) firstMatchId = secId;
    } else {
      if (matchingNav) matchingNav.style.display = "none";
    }
  });

  if (firstMatchId) {
    selectGuideTab(firstMatchId);
  }
}
